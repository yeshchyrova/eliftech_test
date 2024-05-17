const { getAllEvents } = require("../service");

const getEvents = async (req, res, next) => {
  try {
    const events = await getAllEvents(req.query);
    res.json(events);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  getEvents,
};
