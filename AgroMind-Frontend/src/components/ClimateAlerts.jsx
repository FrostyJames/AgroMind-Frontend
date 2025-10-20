export default function ClimateAlerts() {
  const alerts = [
    {
      title: "URGENT: Frost Warning Tonight!",
      description:
        "Temperatures are expected to drop below freezing. Protect sensitive crops or bring them indoors.",
    },
    {
      title: "Heavy Rainfall Expected Tuesday",
      description:
        "Prepare for potential flooding. Ensure drainage systems are clear to prevent waterlogging.",
    },
    {
      title: "Sustainable Tip: Crop Rotation",
      description:
        "Rotate your crops annually to maintain soil fertility and reduce pest issues naturally.",
    },
  ];

  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold text-green-700 mb-4">Climate Alerts & Tips</h3>
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-sm">
            <p className="font-semibold text-red-700">{alert.title}</p>
            <p className="text-sm text-gray-700 mt-1">{alert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}