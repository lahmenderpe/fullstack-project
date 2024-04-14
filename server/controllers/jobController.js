const Jobs = require("../models/jobsModel.js");

async function findJobsWithPagination({ page, limit, id }) {
  const startIndex = (page - 1) * limit;
  const totalDocuments = await Jobs.countDocuments();
  const jobs = await Jobs.find().skip(startIndex).limit(limit).exec();

  return {
    totalDocuments,
    jobs,
    totalPages: Math.ceil(totalDocuments / limit),
    currentPage: page,
  };
}

const getAllJobs = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const id = req.query.userId;
  try {
    const jobs = await findJobsWithPagination({ page, limit, id });
    res.json(jobs);
  } catch (error) {
    next(error);
  }
};

const addNewJob = async (req, res, next) => {
  try {
    const job = req.body;
    const newJob = new Jobs(job);
    const savedJob = await newJob.save();
    res.status(201).send(savedJob);
  } catch (error) {
    next(error);
  }
};

const deleteJob = async (req, res, next) => {
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

const updateJob = async (req, res, next) => {
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

module.exports = { getAllJobs, updateJob, addNewJob, deleteJob };
