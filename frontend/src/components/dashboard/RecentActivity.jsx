import { Box, Stack, Typography } from "@mui/material";
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
    <Box>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Recent Activity
      </Typography>

      <Stack spacing={2}>
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </Stack>
    </Box>
  );
}

export default RecentActivity;