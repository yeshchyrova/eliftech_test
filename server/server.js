const mongoose = require("mongoose");
const { app } = require("./app");

mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 8080;
const eliftechDb =
  "mongodb+srv://elisarrar:VyfZ6X8abwx1883n@cluster0.med7ycc.mongodb.net/db-events?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);

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
