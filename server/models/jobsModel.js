const mongoose = require("mongoose");

const jobsScheme = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  jobType: {
    type: {
      name: String,
      translationKey: String,
    },
    required: false,
  },
  jobStatus: {
    type: {
      name: String,
      translationKey: String,
    },
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

jobsScheme.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Jobs", jobsScheme);
