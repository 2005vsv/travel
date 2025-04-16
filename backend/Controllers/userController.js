// controllers/userController.js
const UserModel = require("../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).send("Passwords do not match");
    }

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword });

    const savedUser = await newUser.save();

    // Create JWT
    const token = jwt.sign({ userId: savedUser._id }, "your_jwt_secret", {
      expiresIn: "7d",
    });

    res.status(201).json({ token, user: savedUser });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, "your_jwt_secret", {
      expiresIn: "7d",
    });

    res.status(200).json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = { signupUser, loginUser };
