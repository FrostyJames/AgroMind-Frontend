import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const addTask = async (task) => {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error("Failed to add task:", error);
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`);

    if (!Array.isArray(response.data)) {
      console.error("Expected array but got:", response.data);
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
    return [];
  }
};