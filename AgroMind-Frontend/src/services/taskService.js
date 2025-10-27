
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const addTask = async (task) => {
  return await axios.post(`${BASE_URL}/tasks`, task);
};

export const getTasks = async () => {
  const response = await axios.get(`${BASE_URL}/tasks`);
  return response.data;
};