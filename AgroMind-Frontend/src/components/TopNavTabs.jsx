import { NavLink, useNavigate } from "react-router-dom";

export default function TopNavTabs() {
  const navigate = useNavigate();

  const tabs = [
    { label: "Main Dashboard", path: "/dashboard" },
    { label: "Crop Recommendations", path: "/recommendations" },
    { label: "Planting Schedule", path: "/schedule" },
    { label: "Activity Tracking", path: "/activities" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex gap-4 border-b border-gray-200 pb-2 mb-6 text-sm font-medium text-green-700">
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          to={tab.path}
          className={({ isActive }) =>
            isActive
              ? "text-green-900 border-b-2 border-green-600 pb-1"
              : "hover:text-green-900 transition duration-200"
          }
        >
          {tab.label}
        </NavLink>
      ))}

      {/* 🔐 Logout Button */}
      <button
        onClick={handleLogout}
        className="ml-auto text-red-600 hover:text-red-800 transition duration-200"
      >
        Logout
      </button>
    </nav>
  );
}