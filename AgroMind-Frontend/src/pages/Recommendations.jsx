import React, { useState } from "react";
import { getCropRecommendation } from "../services/recommendationService";

export default function Recommendations() {
  const [messages, setMessages] = useState([]);
  const [cropName, setCropName] = useState("");
  const [growthStage, setGrowthStage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userMessage = `🧑‍🌾 Crop: ${cropName}, Stage: ${growthStage}`;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    const payload = { crop_name: cropName, growth_stage: growthStage };
    const response = await getCropRecommendation(payload);

    const aiMessage = `🌿 Health Score: ${response.health_score}\n💡 Advice: ${response.advice}`;
    setMessages((prev) => [...prev, { role: "ai", content: aiMessage }]);
    setCropName("");
    setGrowthStage("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🤖 AgroMind AI Assistant</h1>

      {/* Input form first */}
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-4 rounded shadow mb-6">
        <input
          type="text"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          placeholder="Crop name (e.g., Maize)"
          className="border p-2 rounded w-full mb-2"
          required
        />
        <input
          type="text"
          value={growthStage}
          onChange={(e) => setGrowthStage(e.target.value)}
          placeholder="Growth stage (e.g., Vegetative)"
          className="border p-2 rounded w-full mb-2"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
        >
          Ask AgroMind
        </button>
      </form>

      {/* Chat responses below the form */}
      <div className="w-full max-w-xl bg-white p-4 rounded shadow overflow-y-auto h-[400px] flex flex-col justify-start">
        <div className="flex flex-col gap-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-blue-100 text-blue-800 text-right self-end"
                  : "bg-green-100 text-green-800 text-left self-start"
              }`}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="text-green-600 italic self-start">AgroMind is thinking…</div>
          )}
        </div>
      </div>
    </div>
  );
}