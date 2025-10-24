import React, { useState } from "react";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    task: "",
    crop: "",
    yield: "",
    notes: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddActivity = () => {
    if (editIndex !== null) {
      const updated = [...activities];
      updated[editIndex] = { ...formData, status: "Completed" };
      setActivities(updated);
      setEditIndex(null);
    } else {
      const newActivity = { ...formData, status: "Completed" };
      setActivities([newActivity, ...activities]);
    }
    setFormData({ date: "", task: "", crop: "", yield: "", notes: "" });
  };

  const handleEdit = (index) => {
    setFormData(activities[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = activities.filter((_, i) => i !== index);
    setActivities(updated);
    if (editIndex === index) {
      setFormData({ date: "", task: "", crop: "", yield: "", notes: "" });
      setEditIndex(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">🚜 Activity Tracking</h1>

        {/* Log or Edit Activity */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            {editIndex !== null ? "Edit Activity" : "Log New Farm Activity"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            <select
              name="task"
              value={formData.task}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select Task Type</option>
              <option value="Planting">Planting</option>
              <option value="Watering">Watering</option>
              <option value="Fertilizing">Fertilizing</option>
              <option value="Harvesting">Harvesting</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Inspection">Inspection</option>
            </select>
            <input
              type="text"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              placeholder="Crop Name (optional)"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="yield"
              value={formData.yield}
              onChange={handleChange}
              placeholder="Yield Estimate (optional)"
              className="border p-2 rounded w-full"
            />
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Description / Notes"
              className="border p-2 rounded w-full col-span-1 md:col-span-2"
            />
          </div>
          <button
            onClick={handleAddActivity}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full md:w-auto"
          >
            {editIndex !== null ? "Update Activity" : "Log Activity"}
          </button>
        </div>

        {/* Activity Table */}
        <div className="bg-white rounded-lg shadow p-6">
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
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{activity.date}</td>
                    <td className="p-2">{activity.task}</td>
                    <td className="p-2">{activity.crop || "—"}</td>
                    <td className="p-2">{activity.yield || "—"}</td>
                    <td className="p-2">{activity.status}</td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}