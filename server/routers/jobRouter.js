const express = require("express");
const {
  getAllJobs,
  addNewJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobController.js");

const jobRouter = express.Router();

jobRouter.get("/", getAllJobs);
jobRouter.post("/", addNewJob);
jobRouter.delete("/:id", deleteJob);
jobRouter.put("/:id", updateJob);

module.exports = jobRouter;
