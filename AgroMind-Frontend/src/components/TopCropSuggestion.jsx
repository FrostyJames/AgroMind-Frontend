export default function TopCropSuggestion() {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold text-green-700 mb-4">Top Crop Suggestion</h3>

      <div className="flex items-start gap-4">
        <div className="text-4xl">🍅</div>
        <div>
          <h4 className="text-md font-semibold text-gray-800">Organic Tomatoes</h4>
          <p className="text-sm text-gray-600">Suitability: <span className="font-bold">92%</span></p>
          <p className="text-sm text-gray-600">Est. Yield: <span className="font-bold">5 tons/acre</span></p>
          <p className="text-sm text-gray-500 mt-2">
            High-demand crop, excellent for current soil pH and projected rainfall. Recommended for early autumn planting.
          </p>
          <a href="#" className="text-green-600 text-sm font-medium mt-2 inline-block hover:underline">
            View All Recommendations
          </a>
        </div>
      </div>
    </section>
  );
}