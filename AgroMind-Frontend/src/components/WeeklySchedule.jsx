export default function WeeklySchedule() {
  const schedule = [
    {
      date: "Mon, July 22",
      task: "Prepare Soil for Corn",
      weather: "Sunny, 28℃",
    },
    {
      date: "Wed, July 24",
      task: "Irrigation Check",
      weather: "Partly Cloudy, 25℃",
    },
    {
      date: "Fri, July 26",
      task: "Organic Fertilization",
      weather: "Clear, 29℃",
    },
  ];

  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold text-green-700 mb-4">Weekly Schedule Glance</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {schedule.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4">
            <p className="text-sm text-gray-600">{item.date}</p>
            <p className="font-semibold text-gray-800">{item.task}</p>
            <p className="text-xs text-gray-500 mt-1">{item.weather}</p>
          </div>
        ))}
      </div>
      <a href="#" className="text-green-600 text-sm font-medium mt-2 inline-block hover:underline">
        View Full Schedule
      </a>
    </section>
  );
}