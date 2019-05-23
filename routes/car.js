const express = require("express");
const router = express.Router();
const Car = require("../models/car")
const Station = require("../models/station")

// ------ GET ALL CARS ------
router.get("/cars", (req, res, next) => {
  Car.find()
    .then(carArr => res.json(carArr))
    .catch(next);
});

// ------- CREATE A CAR ---------

router.post("/cars", (req, res, next) => {
  const { name, avaliable } = req.body
  Station.find({ _id: { $eq: req.body.station } })
    .then(stationDoc => {
      const stationId = stationDoc[0]._id

      return Car.create({ name, avaliable, station: stationId })
        .then(carArr => res.json(carArr))
    })
    .catch(next)

});

//---------- UPDATE A CAR ---------

router.put("/cars/:id", (req, res, next) => {
  const { ...fields } = req.body
  Car.findByIdAndUpdate(req.params.id,
    { ...fields },
    { runValidators: true }
  ).then(carArr => res.json(carArr))
    .catch(next);
});

// ----------- DELETE A CAR -------

router.delete("/cars/:id", (req, res, next) => {
  Car.findOneAndRemove(req.params.id)
    .then(carArr => res.json(carArr))
    .catch(next);
});

module.exports = router;