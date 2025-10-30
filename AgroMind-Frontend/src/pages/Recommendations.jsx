import React, { useState } from "react";
import { askAgroMind } from "../services/aiService"; // ✅ new service

export default function Recommendations() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [cropName, setCropName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userMessage = `🧑‍🌾 ${query} (Crop: ${cropName})`;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    const payload = {
      query,
      crop_name: cropName,
      kiswahili: false, // or add a toggle later
    };

    const response = await askAgroMind(payload);

    const aiMessage =
      response.health_score !== undefined
        ? `🌿 Health Score: ${response.health_score}\n💡 Advice: ${response.advice}`
        : response.response || "No response received.";

    setMessages((prev) => [...prev, { role: "ai", content: aiMessage }]);
    setQuery("");
    setCropName("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-green-700 mb-4">🤖 AgroMind AI Assistant</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-4 rounded shadow mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything about your crop (e.g., Why are my maize leaves yellow?)"
          className="border p-2 rounded w-full mb-2"
          required
        />
        <input
          type="text"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          placeholder="Crop name (e.g., Maize)"
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