const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const Jobs = require("../models/jobsModel.js");
const validateRegister = require("../validateRequest.js");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Username and password must be provided");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send(`There is not any account with the email "${email}"`);
    }

    const verifiedPassword = await bcrypt.compare(password, user.password);

    if (!verifiedPassword) {
      return res.status(400).send("Wrong password");
    }

    const payload = { id: user.id, name: user.name, email: user.email };

    const token = jwt.sign(payload, process.env.SECRET);
    res.status(200).json({ ...payload, token });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const credentials = req.body;
    console.log(credentials);
    const { error } = validateRegister.validate(credentials);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ username: credentials.username });

    if (user) {
      return res
        .status(400)
        .send(`Username "${credentials.username}" already in use`);
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(credentials.password, saltRounds);

    const newUser = new User({ ...credentials, password: hash });
    await newUser.save();

    res.status(201).json({ message: "User created" });
  } catch (error) {
    next(error);
    console.log(error);
    res.status(500).send("Something went wrong");
  }
};

const getUserInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.status(200).send({
      id: user.id,
      name: user.name,
      username: user.username,
      location: user.location,
    });
  } catch (error) {
    next(error);
    res.status(500).send("Something went wrong");
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userToBeDeleted = await User.findById(id);

    if (!userToBeDeleted) {
      res.status(404).send("User not found");
    }

    await User.findByIdAndDelete(id);
    await Jobs.deleteMany({ user: id });

    res.status(200).send();
  } catch (error) {
    next(error);
    res.status(500).send("Something went wrong");
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;

    const userToBeUpdated = await User.findById(id);

    if (!userToBeUpdated) {
      return res.status(404).send("User not found");
    }

    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, updateUser, deleteUser, getUserInfo };
