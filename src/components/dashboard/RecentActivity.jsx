import ActivityCard from "./ActivityCard";

const activities = [
  {
    title: "Project Updated",
    description: "Dashboard UI was modified.",
    time: "5 min ago",
  },
  {
    title: "AI Response Generated",
    description: "The assistant answered a user query.",
    time: "18 min ago",
  },
  {
    title: "New File Uploaded",
    description: "Quarterly_Report.pdf uploaded.",
    time: "1 hour ago",
  },
];

function RecentActivity() {
  return (
    <div>
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Recent Activity
      </h2>

      <div
        style={{
          display: "grid",
          gap: "16px",
        }}
      >
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            {...activity}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;