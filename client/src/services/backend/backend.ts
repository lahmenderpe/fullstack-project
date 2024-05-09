import axios from "axios";

const backendService = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const login = async (data: any) => {
  console.log("first ==> ", data);
  return await backendService.post("/api/v1/user/login", data);
};

export const register = async (data: any) => {
  return await backendService.post("/api/v1/user/register", data);
};
