const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET_KEY;
const bcrypt = require("bcrypt");
module.exports = {
  registerUser: async (req, res) => {
    try {
      const user = new User(req.body);
      const newUser = await user.save();
      const userToken = jwt.sign({ id: newUser._id }, SECRET);
      console.log(
        "Register User Token: " + userToken,
        "+++++++++++++++++++++++++++"
      );
      console.log(newUser);
      res
        .status(201)
        .cookie("userToken", userToken, { httpOnly: true })
        .json(newUser);
    } catch (error) {
      console.error(error);
      res.status(400).json(error.errors);
    }
  },
  loginUser: async (req, res) => {
    const userFromDB = await User.findOne({ email: req.body.email });
    if (!userFromDB) {
      res.status(400).json("user doesn't exist");
    } else {
      try {
        const isPasswordValid = await bcrypt.compare(
          req.body.password,
          userFromDB.password
        );
        if (isPasswordValid) {
          const userToken = jwt.sign({ id: userFromDB._id }, SECRET);
          console.log("Login User Token: " + userToken, "-------------------");
          res
            .status(201)
            .cookie("userToken", userToken, { httpOnly: true })
            .json({
              userFromDB,
              message: "Login succesful",
              userToken: userToken,
            });
        }
      } catch (error) {
        res.status(400).json(error);
      }
    }
  },
  logout: async (req, res) => {
    res.clearCookie("userToken");
    res.json({ successMessage: "User logged out" });
  },
  getLoggedUser: async (req, res) => {
    try {
        // req.cookies.userToken;
        const userPayload = jwt.verify(req.headers.authorization, SECRET);
        if(userPayload){
            const user = await User.findById(userPayload.id)
            if(user){
                res.json(user)
            }
        }
    }catch(err){
        res.status(400).json({errorMessage:"User is not connected!"})
    }
  },
};
