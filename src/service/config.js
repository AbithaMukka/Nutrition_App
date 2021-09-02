import axios from "axios";

const baseURL = "https://api.edamam.com";
const axiosConfig = axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "https://developer.edamam.com",
    "Access-control-Allow-credentials": true,
  },
});
export default axiosConfig;
