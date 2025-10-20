import { NavLink } from "react-router-dom";

export default function TopNavTabs() {
  const tabs = [
    { label: "Main Dashboard", path: "/dashboard" },
    { label: "Crop Recommendations", path: "/recommendations" },
    { label: "Planting Schedule", path: "/schedule" },
    { label: "Activity Tracking", path: "/activities" },
  ];

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
    </nav>
  );
}