import axios from "axios";

const axiosInsatance = axios.create({
  
  baseURL: "http://127.0.0.1:5001/clone-dce14/us-central1/api",
  // baseURL: "http://localhost:5000"
  // deploying render.com
  baseURL: "https://amazon-api-76uk.onrender.com/",
});
export {axiosInsatance}
