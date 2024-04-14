const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jobsRouter = require("./routers/jobRouter.js");
const userRouter = require("./routers/userRouter.js");
const validateToken = require("./middlewares/validateToken.js");
const errorHandler = require("./middlewares/errorHandler.js");

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/jobs", jobsRouter);
app.use("/api/v1/user", userRouter);

app.use(errorHandler);

module.exports = app;
