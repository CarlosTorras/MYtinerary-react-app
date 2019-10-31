// Connection of express
const express = require("express");
const bodyParser = require("body-parser");
const cityRouter = require("./cities");
const itineraryRouter = require("./itineraries");
const activityRouter = require("./activities");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import the MongoDB Key
const db = require("./keys").mongoURI;

// Connection of MongoDB Database with Express, trhought Mongoose
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));

app.use("/cities", cityRouter);
app.use("/itineraries", itineraryRouter);
app.use("/activities", activityRouter);

app.get("/", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/test", (req, res) => {
  res.send({ express: "Hello test biatches" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
