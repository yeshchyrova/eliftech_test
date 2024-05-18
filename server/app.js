const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

// req.params.id
// req.query === {page: 1, sdsd: 34}
// app.use(express.urlencoded({ extended: false })); парсер для форм

const eventsRouter = require("./api");
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));
app.use(express.static("public"));

// app.use("/", eventsRouter);
app.use("/", (req, res) => {
  res.send("EE server was run (send method)");
  console.log("EE server was run")
})
app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = { app };
