
import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const addTask = async (task) => {
  return await axios.post(`${BASE_URL}/tasks`, task);
};

export const getTasks = async () => {
  const response = await axios.get(`${BASE_URL}/tasks`);
  return response.data;
};