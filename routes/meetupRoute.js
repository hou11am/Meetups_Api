const express = require("express");
const router = express.Router();
const Meetup = require("../models/meetupModule");

router.route("/newMeetup").post((req, res) => {
  console.log(req.body);
  const meetup = new Meetup({
    title: req.body.title,
    image: req.body.image,
    adresse: req.body.adresse,
    description: req.body.description,
  });

  meetup.save();
});

//Get All Products
router.route("/all").get((req, res) => {
  Meetup.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json({ message: error });
      console.log(error);
    });
});

module.exports = router;
