require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require('body-parser')
// mongoose.Promise = Promise;
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

// parse application/json
app.use(bodyParser.json())

app.locals.title = "Virtuo Tech Challenge";


app.use("/", require("./routes/car"));
app.use("/", require("./routes/station-route"));

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});


module.exports = app;
