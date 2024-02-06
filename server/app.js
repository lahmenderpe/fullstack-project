import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import jobsRouter from "./routers/jobRouter.js";
import userRouter from "./routers/userRouter.js";
import validateToken from "./middlewares/validateToken.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/jobs", validateToken, jobsRouter);
app.use("/api/v1/user", userRouter);

app.use(errorHandler);

export default app;
