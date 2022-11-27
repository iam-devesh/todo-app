const { Op } = require("sequelize");
const User = require("../model/user");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

exports.singup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;


  // check if gmail is present or not 
  /// if exist then please sigin 

  // else singup 
  try {
    const alreadyExists = await User.findOne({
      where: {
        [Op.or]: [{ email: email }],
      },
    });

    if (!alreadyExists) {
      //hashpassword 
      const salt = bcrypt.genSaltSync(SALT_ROUNDS);
      const hash = bcrypt.hashSync(password, salt);
      //add user 
      const user = await new User({
        firstname,
        lastname,
        email,
        passwordhash: hash
      })
      const savedUser = await user.save();
      console.log(savedUser, "user saved ");
      res.status(201).json({
        message: "User created successfully",
        savedUser,
      });
    }
    else {
      res.status(500).json({
        message: "User already exist",
      })
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }


};
exports.singin = (req, res) => {

};

exports.signout = (req, res) => {

};
