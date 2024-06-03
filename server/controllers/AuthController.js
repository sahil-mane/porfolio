const { User } = require("../models/userModal");
const createError = require("../utils/appError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const UserExist = await User.findOne({ email });

    if (UserExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
    //     expiresIn: '90d',
    // });

    return res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // Checking if user exists
    if (!user) {
      return res.status(404).json({ success: false, msg: "Please sign up" });
    }

    // checking if password matches
    const comparePassword = await bcrypt.compare(password, user.password);

    // if password does not match
    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect credentials" });
    }

    // creating a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30s",
    });

    // check if "token cookie exists"

    // sending token in cookie exists in the request
    const existingToken = req.cookie.token;

    if (existingToken) {
      //clear the existing token cookie
      res.clearCookie("token");
    }

    // cookie("cookie_name",cookie_data ,optional)
    res.cookie("token", token, {
      path: "/",
      httpOnly: true, // client side js cannot access the cookie
      expiresIn: new Date(Date.now() + 1000 * 30), // expires in 30s
      sameSite: "lax",
    });

    return res.status(200).json({ success: true, message: "Logged in" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
//36:21 min:sec
