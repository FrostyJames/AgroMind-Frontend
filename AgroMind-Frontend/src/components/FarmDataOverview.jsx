export default function FarmDataOverview() {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold text-green-700 mb-4">Farm Data Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Farm Location</p>
          <p className="font-semibold text-gray-800">Central Plains, IA</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Primary Crop</p>
          <p className="font-semibold text-gray-800">Corn</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Planting Goals</p>
          <p className="font-semibold text-gray-800">Sustainable yield increase</p>
        </div>
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm">
        Update Farm Data
      </button>
    </section>
  );
}