import React, { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

export default function WeeklySchedule() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Group tasks by date
  const grouped = tasks.reduce((acc, task) => {
    if (!acc[task.date]) acc[task.date] = [];
    acc[task.date].push(task);
    return acc;
  }, {});

  return (
    <section className="mb-8">
      <h3 className="text-lg font-bold text-green-700 mb-4">Weekly Schedule Glance</h3>

      {Object.keys(grouped).length === 0 ? (
        <p className="text-gray-500">No tasks scheduled yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(grouped).map(([date, taskList], index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-4">
              <p className="text-sm text-gray-600">{new Date(date).toDateString()}</p>
              {taskList.map((task, i) => (
                <div key={i} className="mb-2">
                  <p className="font-semibold text-gray-800">{task.activity}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {/* Placeholder weather */}
                    Forecast unavailable
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <a
        href="#"
        className="text-green-600 text-sm font-medium mt-2 inline-block hover:underline"
      >
        View Full Schedule
      </a>
    </section>
  );
}