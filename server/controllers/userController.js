import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Jobs from "../models/jobsModel.js";
import { validateRegister } from "../validateRequest.js";

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send("Username and password must be provided");
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .send(`There is not any account with the username "${username}"`);
    }

    const verifiedPassword = await bcrypt.compare(password, user.password);

    if (!verifiedPassword) {
      return res.status(400).send("Wrong password");
    }

    const payload = { id: user.id, name: user.name, username: user.username };

    const token = jwt.sign(payload, process.env.SECRET);
    res.status(200).json({ ...payload, token });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const credentials = req.body;
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

    res.status(201).send();
  } catch (error) {
    next(error);
    res.state(500).send("Something went wrong");
  }
};

export const getUserInfo = async (req, res, next) => {
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
    res.state(500).send("Something went wrong");
  }
};

export const deleteUser = async (req, res, next) => {
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
    res.state(500).send("Something went wrong");
  }
};

export const updateUser = async (req, res, next) => {
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
