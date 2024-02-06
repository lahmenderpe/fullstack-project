import mongoose from "mongoose";
import { MONGO_URL } from "../config.js";

const createConnection = () => {
  return mongoose.connect(MONGO_URL);
};

export default createConnection;
