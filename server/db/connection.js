const mongoose = require("mongoose");
const { MONGO_URL } = require("../config.js");

const createConnection = () => {
  return mongoose.connect(MONGO_URL);
};

module.exports = createConnection;
