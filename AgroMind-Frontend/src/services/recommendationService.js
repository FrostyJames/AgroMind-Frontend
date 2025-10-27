import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getCropRecommendation(payload) {
  try {
    const response = await axios.post(`${BASE_URL}/recommendations`, payload);
    return response.data;
  } catch (error) {
    console.error("Recommendation error:", error);
    return {
      health_score: 50.0,
      advice: "Unable to fetch recommendation.",
    };
  }
}