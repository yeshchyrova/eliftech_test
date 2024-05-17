// роутинг
const { getEvents } = require("../controllers");
const express = require("express");

const router = express.Router();

router.get("/", getEvents);

// router.post("/registration/:id", () => {});

// router.get("/participants/:id", () => {});

module.exports = router;
