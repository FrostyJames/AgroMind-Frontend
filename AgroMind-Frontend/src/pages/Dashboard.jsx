import TopNavTabs from "../components/TopNavTabs";
import WelcomeOverview from "../components/WelcomeOverview";
import DashboardStats from "../components/DashboardStats";
import FarmDataOverview from "../components/FarmDataOverview";
import TopCropSuggestion from "../components/TopCropSuggestion";
import WeeklySchedule from "../components/WeeklySchedule";
import ClimateAlerts from "../components/ClimateAlerts";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Top Navigation Tabs */}
      <TopNavTabs />

      {/* Welcome Message + Farm Overview */}
      <WelcomeOverview />

      {/* Dashboard Stats */}
      <DashboardStats />

      {/* Farm Data Overview */}
      <FarmDataOverview />

      {/* Top Crop Suggestion */}
      <TopCropSuggestion />

      {/* Weekly Schedule Glance */}
      <WeeklySchedule />

      {/* Climate Alerts & Tips */}
      <ClimateAlerts />
    </div>
  );
}