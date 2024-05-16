const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;

// req.params.id
// req.query === {page: 1, sdsd: 34}
// app.use(express.urlencoded({ extended: false })); парсер для форм

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/board", (req, res) => {
//
// })

// app.get("/registration", (req, res, next) => {
//   console.log("reg");
  // //const { fullName, email, birthDate, heardFrom } = req.body;
// });
// app.METHOD(PATH, HANDLER)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
