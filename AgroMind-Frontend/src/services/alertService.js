import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getAlerts = async () => {
  const res = await axios.get(`${BASE_URL}/alerts`);
  return res.data;
};