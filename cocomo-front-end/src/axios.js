import axios from "axios";

// Set your backend server's base URL here
const instance = axios.create({
  baseURL: "http://localhost:5000", // Replace this with your actual backend URL
});

export default instance;
