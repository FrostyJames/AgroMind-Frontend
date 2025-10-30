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
    <nav className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 mb-6 bg-gradient-to-r from-green-100 via-green-50 to-green-100 border-b border-green-300 shadow-sm rounded-md">
      <div className="flex flex-wrap gap-4 text-sm font-medium text-green-700">
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            to={tab.path}
            className={({ isActive }) =>
              isActive
                ? "text-green-900 border-b-2 border-green-600 pb-1 rounded-sm"
                : "hover:text-green-900 transition duration-200"
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-200"
      >
        Logout
      </button>
    </nav>
  );
}