export default function WelcomeOverview() {
  const stats = [
    { label: "Acres Managed", value: "150", description: "Total land under cultivation." },
    { label: "Active Crops", value: "4", description: "Different crops currently growing." },
    { label: "Soil Moisture", value: "68%", description: "Optimal levels in most plots." },
    { label: "Avg. Yield", value: "1.2 T/acre", description: "Average last season's yield." },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-green-700 mb-4">Welcome </h2>
      <p className="text-gray-600 mb-6">Here's a quick overview of your farm's performance and upcoming tasks.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-4">
            <p className="text-2xl font-bold text-green-700">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}