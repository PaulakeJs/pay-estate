import axios from "axios";
export const axiosManager = axios.create({
  baseURL: "http://localhost:7000",
});

axiosManager.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
