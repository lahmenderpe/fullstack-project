import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3131;
const MONGO_URL =
  process.env.NODE_ENV === "test"
    ? process.env.MONGO_URL_TEST
    : process.env.MONGO_URL;

export { PORT, MONGO_URL };
