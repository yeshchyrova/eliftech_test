const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const events = new Schema({
  _id: { type: Schema.Types.ObjectId, required: [true, "Id is required"] },
  title: { type: String, required: [true, "Title is required"] },
  description: { type: String, required: [true, "Description is required"] },
  date: { type: String, required: [true, "Date is required"] },
  organizer: { type: String, required: [true, "Organizer is required"] },
});

// const events = new Schema({
//   _id: Schema.Types.ObjectId,
//   title: String,
//   description: String,
//   date: String,
//   organizer: String,
// });

const registerEvent = new Schema({
  fullName: { type: String, required: [true, "Fullname is required"] },
  email: { type: String, required: [true, "Email is required"] },
  birthDate: { type: Date, required: [true, "Birth date is required"] },
  heardFrom: {
    type: String,
    enum: ["myself", "friends", "socMedia"],
    required: [true, "This field is required"],
  },
});

const Event = mongoose.model("event", events);

module.exports = { Event };
