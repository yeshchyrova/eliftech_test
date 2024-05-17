//робота з бд
const { Event } = require("./schemas/events");

const getAllEvents = async (query) => {
  const { limit = 12, page = 1 } = query;
  const skip = (page - 1) * limit;
  // const result = await Event.find({ skip: 0, limit: 12 });
  const result = await Event.find().limit(limit).skip(skip);

  return result;
}

module.exports = {
  getAllEvents,
}