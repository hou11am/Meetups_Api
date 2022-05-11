const mongoose = require("mongoose");

const meetupSchema = {
  title: String,
  image: String,
  adress: String,
  description: String,
};
const Meetup = mongoose.model("Meetup", meetupSchema);
module.exports = Meetup;
