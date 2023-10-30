// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3004", // Assuming your JSON server runs on port 3001
});

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
