// src/components/RecentActivities.jsx
import React, { useEffect, useState } from "react";
import { getActivities } from "../services/activityService";

export default function RecentActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities().then(setActivities).catch(console.error);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">📋 Recent Activities</h2>
      {activities.length === 0 ? (
        <p className="text-gray-500">No activities logged yet.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-green-100 text-left">
              <th className="p-2">Date</th>
              <th className="p-2">Task</th>
              <th className="p-2">Crop</th>
              <th className="p-2">Yield</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{activity.date}</td>
                <td className="p-2">{activity.task}</td>
                <td className="p-2">{activity.crop || "—"}</td>
                <td className="p-2">{activity.yield_ || "—"}</td>
                <td className="p-2">{activity.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}