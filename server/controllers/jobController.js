import Jobs from "../models/jobsModel.js";

export const getAllJobs = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Jobs.find({ user: id });
    res.status(200).json({ jobs: response });
  } catch (error) {
    next(error);
  }
};

export const addNewJob = async (req, res, next) => {
  try {
    const job = req.body;
    const newJob = new Jobs(job);
    const savedJob = await newJob.save();
    res.status(201).send(savedJob);
  } catch (error) {
    next(error);
  }
};

export const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itemTobeDeleted = await Jobs.findById(id);

    if (!itemTobeDeleted) {
      return res.status(404).send("Resource not found");
    }

    await Jobs.findByIdAndDelete(id);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
};

export const updateJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = req.body;
    const updated = await Jobs.findByIdAndUpdate(id, job, {
      new: true,
    });

    console.log(updated);

    if (!updated) {
      return res.status(404).send("Resource not found");
    }

    res.status(200).send(updated);
  } catch (error) {
    next(error);
  }
};
