require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require('body-parser')
mongoose.Promise = Promise;
mongoose
  .connect(
    process.env.MONGODB_URI,
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", require("./routes/car"));
app.use("/", require("./routes/station"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});


module.exports = app;
