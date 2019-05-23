const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stationSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("Station", stationSchema);
