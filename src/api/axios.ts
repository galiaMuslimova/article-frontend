import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3003",
  withCredentials: true,
  headers: { "Access-Control-Allow-Origin": "*" },
});
