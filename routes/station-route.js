const express = require("express");
const router = express.Router();
const Station = require("../models/station")

// ------ GET ALL STATIONS ------
router.get("/stations", (req, res, next) => {
  Station.find()
    .then(stationArr => res.json(stationArr))
    .catch(next);
});

// ------- CREATE A STATION ---------

router.post("/stations", (req, res, next) => {
  const { ...fields } = req.body
  Station.create({ ...fields })
    .then(stationDoc => {
      res.json(stationDoc);
    })
    .catch(next);
});

//---------- UPDATE A STATION ---------

router.put("/stations/:id", (req, res, next) => {
  const { ...fields } = req.body

  Station.findByIdAndUpdate(req.params.id,
    { ...fields },
    { runValidators: true, new: true }
  )
    .then(stationArr => {
      res.json(stationArr)
    })
    .catch(next);
});

// ----------- DELETE A STATION -------

router.delete("/stations/:id", (req, res, next) => {
  Station.findOneAndRemove(req.params.id)
    .then(stationDoc => {
      res.json(stationDoc)
    })
    .catch(next);
});

module.exports = router;