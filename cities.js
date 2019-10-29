const cityModel = require("./model/cityModel");
const express = require("express");
const router = express.Router();

/*get all cities*/
router.get("/", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

// post cities

router.post("/", (req, res) => {
  const newCity = new cityModel({
    city: req.body.city,
    country: req.body.country
  });

  cityModel.find({}).then(files => {
    for (i = 0; i < files.length; i++) {
      if (files[i].city == newCity.city) {
        console.log("this city already exists");
      } else {
        newCity
          .save()
          .then(city => {
            res.send(city);
          })
          .catch(err => {
            res.status(500).send("Server error");
          });
      }
    }
  });
});

module.exports = router;
