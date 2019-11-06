const userModel = require("./model/userModel");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");

/*get all cities*/
router.get("/", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

// post cities

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //   simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  userModel.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new userModel({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });

    //   Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { _id: user._id },
            config.get("jwtSecret"),
            //   {expiresIn: 3600},
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  _id: user._id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;

//   userModel.find({}).then(files => {
//     for (i = 0; i < files.length; i++) {
//       if (files[i].email == newUser.email) {
//         console.log("this user already exists");
//       } else {
//         newUser
//           .save()
//           .then(user => {
//             res.send(user);
//           })
//           .catch(err => {
//             res.status(500).send("Server error");
//           });
//       }
//     }
//   });
