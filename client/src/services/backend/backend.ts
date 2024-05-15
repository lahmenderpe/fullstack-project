import axios from "axios";

export const login = async (data: any) => {
  console.log("first ==> ", data);
  return await axios.post("/api/v1/user/login", data);
};

export const register = async (data: any) => {
  return await axios.post("/api/v1/user/register", data);
};

export const getAllJobs = async (userId: string, token: string) => {
  return await axios.get(`/api/v1/jobs/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const addNewJob = async (data: any, token: string) => {
  return await axios.post("/api/v1/jobs", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteJob = async (id: string, token: string) => {
  return await axios.delete(`/api/v1/jobs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateJob = async (id: string, data: any, token: string) => {
  return await axios.put(`/api/v1/jobs/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
