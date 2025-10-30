
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export async function askAgroMind(payload) {
  try {
    const response = await axios.post(`${BASE_URL}/ai/ask`, payload);
    return response.data;
  } catch (error) {
    console.error("AgroMind AI error:", error);
    return {
      response: "AgroMind could not process your question. Please try again.",
    };
  }
}