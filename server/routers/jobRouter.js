import express from "express";
import {
  getAllJobs,
  addNewJob,
  deleteJob,
  updateJob,
} from "../controllers/jobController.js";

const jobRouter = express.Router();

jobRouter.get("/:id", getAllJobs);
jobRouter.post("/", addNewJob);
jobRouter.delete("/:id", deleteJob);
jobRouter.put("/:id", updateJob);

export default jobRouter;
