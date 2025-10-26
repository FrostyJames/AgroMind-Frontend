export default function DashboardStats() {
  const stats = [
    { label: "Soil Health", value: "Optimal", icon: "🌱", color: "bg-green-100" },
    { label: "Rainfall", value: "12 mm", icon: "🌧️", color: "bg-blue-100" },
    { label: "Crop Yield", value: "85%", icon: "🌾", color: "bg-yellow-100" },
    { label: "Temperature", value: "23°C", icon: "🌡️", color: "bg-red-100" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-xl shadow-md ${stat.color} flex items-center justify-between`}
        >
          <div className="text-3xl">{stat.icon}</div>
          <div className="text-right">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}