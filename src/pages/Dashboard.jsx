import MainLayout from "../components/layout/MainLayout";

import MetricCard from "../components/dashboard/MetricCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuickActions from "../components/dashboard/QuickActions";

import {
  Users,
  FileText,
  Database,
  Bot,
} from "lucide-react";

import { Grid, Typography } from "@mui/material";

function Dashboard() {
  return (
    <MainLayout>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="Users"
            value="120"
            subtitle="+12 this week"
            icon={<Users />}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="Documents"
            value="1,200"
            subtitle="+45 uploaded"
            color="#06B6D4"
            icon={<FileText />}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="Datasets"
            value="34"
            subtitle="Connected"
            color="#22C55E"
            icon={<Database />}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <MetricCard
            title="AI Requests"
            value="6,842"
            subtitle="Today"
            color="#F59E0B"
            icon={<Bot />}
          />
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        mt={5}
        mb={2}
      >
        Quick Actions
      </Typography>

      <QuickActions />

      <Typography
        variant="h5"
        mt={5}
        mb={2}
      >
        Recent Activity
      </Typography>

      <RecentActivity />
    </MainLayout>
  );
}

export default Dashboard;