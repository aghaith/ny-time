import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
});

export default api;
