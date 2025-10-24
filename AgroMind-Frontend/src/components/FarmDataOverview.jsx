import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

export default function FarmDataOverview() {
  const [farm, setFarm] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    size_hectares: "",
  });

  useEffect(() => {
    const fetchFarm = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/farms/`);
        if (res.data.length > 0) {
          const farmData = res.data[0];
          setFarm(farmData);
          setFormData({
            name: farmData.name || "",
            location: farmData.location || "",
            size_hectares: farmData.size_hectares || "",
          });
        } else {
          setEditMode(true); // no farm yet, show create form
        }
      } catch (error) {
        console.error("Failed to load farm data:", error);
      }
    };
    fetchFarm();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (farm) {
        const res = await axios.put(`${BASE_URL}/farms/${farm.id}`, formData);
        setFarm(res.data);
      } else {
        const res = await axios.post(`${BASE_URL}/farms/`, formData);
        setFarm(res.data);
      }
      setEditMode(false);
    } catch (error) {
      console.error("Failed to save farm data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${BASE_URL}/farms/${farm.id}`);
      setFarm(null);
      setFormData({ name: "", location: "", size_hectares: "" });
      setEditMode(true); // show create form again
    } catch (error) {
      console.error("Failed to delete farm:", error);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h3 className="text-lg font-bold text-green-700 mb-4">Farm Data Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Farm Name</p>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          ) : (
            <p className="font-semibold text-gray-800">{farm?.name}</p>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-600">Farm Location</p>
          {editMode ? (
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          ) : (
            <p className="font-semibold text-gray-800">{farm?.location}</p>
          )}
        </div>
        <div>
          <p className="text-sm text-gray-600">Size (hectares)</p>
          {editMode ? (
            <input
              type="number"
              name="size_hectares"
              value={formData.size_hectares}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          ) : (
            <p className="font-semibold text-gray-800">{farm?.size_hectares}</p>
          )}
        </div>
      </div>

      {editMode ? (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm"
          >
            {farm ? "Save Changes" : "Create Farm"}
          </button>
          {farm && (
            <>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-sm"
              >
                Delete Farm
              </button>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-sm"
        >
          Update Farm Data
        </button>
      )}
    </section>
  );
}