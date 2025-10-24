import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getAlerts = async () => {
  const res = await axios.get(`${BASE_URL}/alerts`);
  return res.data;
};