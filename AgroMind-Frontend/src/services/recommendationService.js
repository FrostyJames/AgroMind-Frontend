import axios from 'axios';

export async function getCropRecommendation(payload) {
  try {
    const response = await axios.post('http://localhost:8000/recommendations', payload);
    return response.data;
  } catch (error) {
    console.error("Recommendation error:", error);
    return { health_score: 50.0, advice: "Unable to fetch recommendation." };
  }
}