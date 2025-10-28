import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addTask } from "../services/taskService"; // 👈 import backend sync

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setNewTask("");
    setEditIndex(null);
    setShowForm(true);
  };

  const handleAddOrUpdateTask = async () => {
    const dateKey = selectedDate.toDateString();
    const updated = { ...tasks };
    if (!updated[dateKey]) updated[dateKey] = [];

    if (editIndex !== null) {
      updated[dateKey][editIndex] = newTask;
    } else {
      updated[dateKey].push(newTask);


      // 👇 Send to backend
      await addTask({
        crop: extractCropName(newTask),
        activity: newTask,
        date: selectedDate.toISOString().split("T")[0],
      });
    }

    setTasks(updated);
    setNewTask("");
    setEditIndex(null);
    setShowForm(false);
  };

  const extractCropName = (task) => {
    // crude crop name extractor: first word after emoji or prefix
    const match = task.match(/(?:🌿|🧑‍🌾)?\s*(Plant|Water|Fertilize)?\s*(\w+)/i);
    return match ? match[2] : "Unknown";
  };

  const handleEditTask = (dateKey, index) => {
    setSelectedDate(new Date(dateKey));
    setNewTask(tasks[dateKey][index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDeleteTask = (dateKey, index) => {
    const updated = { ...tasks };
    updated[dateKey].splice(index, 1);
    if (updated[dateKey].length === 0) {
      delete updated[dateKey];
    }
    setTasks(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-6">🌱 Weekly Planting Schedule</h2>

        {/* Calendar Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <Calendar
            onClickDay={handleDateClick}
            className="w-full calendar-custom"
          />
        </div>

        {/* Task Input Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              {editIndex !== null
                ? `Edit Task for ${selectedDate.toDateString()}`
                : `Add Task for ${selectedDate.toDateString()}`}
            </h3>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="e.g., 🌿 Plant Tomatoes"
              className="border border-gray-300 p-2 rounded w-full mb-4"
            />
            <button
              onClick={handleAddOrUpdateTask}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition w-full"
            >
              {editIndex !== null ? "Update Task" : "Add Task"}
            </button>
          </div>
        )}

        {/* Task List */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">📋 Scheduled Tasks</h3>
          {Object.keys(tasks).length === 0 ? (
            <p className="text-gray-500">No tasks scheduled yet.</p>
          ) : (
            <ul className="space-y-6">
              {Object.entries(tasks).map(([dateKey, taskList]) => (
                <li key={dateKey}>
                  <div className="font-semibold text-gray-800 mb-2">{dateKey}</div>
                  <ul className="space-y-2">
                    {taskList.map((task, index) => (
                      <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                        <span>{task}</span>
                        <div className="space-x-2">
                          <button
                            onClick={() => handleEditTask(dateKey, index)}
                            className="text-blue-600 hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteTask(dateKey, index)}
                            className="text-red-600 hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}