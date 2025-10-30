import { Link } from "react-router-dom";

const cropSuggestions = [
  {
    emoji: "🌽",
    cropName: "Maize",
    suitability: 88,
    yieldEstimate: "4.5 tons/acre",
    description: "Reliable staple crop with strong performance in current soil and rainfall.",
  },
  {
    emoji: "🍅",
    cropName: "Tomatoes",
    suitability: 92,
    yieldEstimate: "5 tons/acre",
    description: "High-demand crop, thrives in current pH and early autumn conditions.",
  },
  {
    emoji: "🥔",
    cropName: "Potatoes",
    suitability: 85,
    yieldEstimate: "6 tons/acre",
    description: "Performs well in cooler zones with moderate rainfall and loose soil.",
  },
  {
    emoji: "🫘",
    cropName: "Beans",
    suitability: 80,
    yieldEstimate: "1.8 tons/acre",
    description: "Nitrogen-fixing legume, ideal for crop rotation and soil health.",
  },
  {
    emoji: "🥬",
    cropName: "Sukuma Wiki",
    suitability: 90,
    yieldEstimate: "2.5 tons/acre",
    description: "Fast-growing leafy green, great for kitchen gardens and local markets.",
  },
  {
    emoji: "🥑",
    cropName: "Avocado",
    suitability: 78,
    yieldEstimate: "7 tons/acre",
    description: "Long-term investment crop, thrives in well-drained soils with steady rainfall.",
  },
];

export default function TopCropSuggestions() {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold text-green-700 mb-4">Top Crop Suggestions</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cropSuggestions.map((crop, index) => (
          <div key={index} className="flex items-start gap-4 bg-green-50 p-4 rounded-lg shadow-sm">
            <div className="text-3xl">{crop.emoji}</div>
            <div>
              <h4 className="text-md font-semibold text-gray-800">{crop.cropName}</h4>
              <p className="text-sm text-gray-600">
                Suitability: <span className="font-bold">{crop.suitability}%</span>
              </p>
              <p className="text-sm text-gray-600">
                Est. Yield: <span className="font-bold">{crop.yieldEstimate}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">{crop.description}</p>
              <Link
                to="/recommendations"
                className="text-green-600 text-sm font-medium mt-2 inline-block hover:underline"
              >
                View All Recommendations
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}