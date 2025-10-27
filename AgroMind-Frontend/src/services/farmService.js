import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getFarms = async () => {
  const response = await axios.get(`${BASE_URL}/farms/`); 
  return response.data;
};

export const updateFarm = async (farmId, data) => {
  const response = await axios.put(`${BASE_URL}/farms/${farmId}`, data);
  return response.data;
};