
import TopNavTabs from "./TopNavTabs";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <TopNavTabs />
      {children} {/* This renders the current page only */}
    </div>
  );
}