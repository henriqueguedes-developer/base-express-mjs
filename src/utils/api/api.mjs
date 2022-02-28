import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.ENDPOINT}`,
});

export default api;
