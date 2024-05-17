const { getAllEvents } = require("../service");

// логіка роботи застосунку
// req.query === {page: 1, sdsd: 34}
const getEvents = async (req, res, next) => {
  // const { limit, page } = req.query;
  try {
    const events = await getAllEvents(req.query);
    res.json({
      status: "success",
      code: 200,
      data: {
        events: events,
      },
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  getEvents,
};
