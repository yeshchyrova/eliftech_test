const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 9000;
const eliftechDb =
  "mongodb+srv://elisarrar:VyfZ6X8abwx1883n@cluster0.med7ycc.mongodb.net/db-events?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.set("strictQuery", true);

// req.params.id
// req.query === {page: 1, sdsd: 34}
// app.use(express.urlencoded({ extended: false })); парсер для форм

const eventsRouter = require("./api");
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));
app.use(express.static("public"));

app.use("/", eventsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(eliftechDb)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log("Database connection successful");
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });

module.exports = { app };
