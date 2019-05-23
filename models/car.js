const mongoose = require("mongoose")
const Schema = mongoose.Schema

const carSchema = new Schema(
  {
    name: { type: String, required: true },
    station: {
      type: Schema.Types.ObjectId,
      ref: "Station",
      required: true
    },
    avaliable: { type: Boolean, default: false }
  },
  { timestamps: true }
)


module.exports = mongoose.model("Car", carSchema)