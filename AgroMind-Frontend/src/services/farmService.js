import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getFarms = async () => {
  const response = await axios.get(`${BASE_URL}/farms/`); 
  return response.data;
};

export const updateFarm = async (farmId, data) => {
  const response = await axios.put(`${BASE_URL}/farms/${farmId}`, data);
  return response.data;
};