import MainLayout from "../components/layout/MainLayout";

import MetricCard from "../components/dashboard/MetricCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import QuickActions from "../components/dashboard/QuickActions";
import CustomCard from "../components/common/Card";

import {
  Users,
  FileText,
  Database,
  Bot,
  Sparkles,
  TrendingUp,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

const stats = [
  {
    title: "Total Files",
    value: "132",
    subtitle: "+12 this week",
    icon: <FileText size={20} />,
    color: "#4F46E5",
  },
  {
    title: "Total Users",
    value: "248",
    subtitle: "+18 this week",
    icon: <Users size={20} />,
    color: "#22D3EE",
  },
  {
    title: "AI Queries",
    value: "56",
    subtitle: "+5 this week",
    icon: <Bot size={20} />,
    color: "#F59E0B",
  },
  {
    title: "Active Projects",
    value: "8",
    subtitle: "+2 this week",
    icon: <Database size={20} />,
    color: "#22C55E",
  },
];

const insights = [
  {
    title: "Top Insight",
    description: "Customer satisfaction improved by 92% based on recent platform usage.",
  },
  {
    title: "Recommendation",
    description: "Optimize AI query workflows to unlock higher efficiency.",
  },
  {
    title: "Alert",
    description: "Pending dataset reviews need attention before the next sync window.",
  },
];

const tasks = [
  { label: "Completed", value: "12" },
  { label: "In Progress", value: "21" },
  { label: "Pending", value: "8" },
];

const deadlines = [
  { title: "UI Design Review", date: "May 30, 2025" },
  { title: "Dataset Sync", date: "Jun 01, 2025" },
];

function Dashboard() {
  return (
    <MainLayout>
      <Stack spacing={3}>
        <CustomCard
          sx={{
            background: "linear-gradient(135deg, #4F46E5 0%, #4338CA 100%)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 30px 80px rgba(79, 70, 229, 0.25)",
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            gap={3}
          >
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Sparkles size={18} />
                <Typography variant="body2" fontWeight={600} sx={{ opacity: 0.85 }}>
                  Platform Insights
                </Typography>
              </Stack>

              <Typography variant="h4" fontWeight={700}>
                Good evening, Rakesh
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, opacity: 0.95, maxWidth: 540 }}>
                Track uploads, AI queries, data trends, and team activity across your research workspace.
              </Typography>
            </Box>

            <Stack spacing={1} alignItems="flex-end">
              <Chip
                label="Live"
                sx={{
                  bgcolor: "rgba(255,255,255,0.16)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
              <Typography sx={{ opacity: 0.75 }}>May 20, 2025</Typography>
            </Stack>
          </Box>
        </CustomCard>

        <Grid container spacing={3}>
          {stats.map((item) => (
            <Grid item xs={12} md={6} lg={3} key={item.title}>
              <MetricCard
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
                icon={item.icon}
                color={item.color}
              />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <RecentActivity />
          </Grid>

          <Grid item xs={12} lg={4}>
            <CustomCard sx={{ height: "100%" }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <TrendingUp size={18} color="#60A5FA" />
                <Typography variant="h6" fontWeight={700}>
                  AI Insights
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {insights.map((insight) => (
                  <Box
                    key={insight.title}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      bgcolor: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight={700}>
                      {insight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                      {insight.description}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CustomCard>
          </Grid>

          <Grid item xs={12} lg={4}>
            <CustomCard sx={{ height: "100%" }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Clock3 size={18} color="#34D399" />
                <Typography variant="h6" fontWeight={700}>
                  Tasks Overview
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {tasks.map((task) => (
                  <Box key={task.label} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>{task.label}</Typography>
                    <Typography fontWeight={700}>{task.value}</Typography>
                  </Box>
                ))}
              </Stack>

              <Box mt={3}>
                <Typography variant="subtitle2" fontWeight={700}>
                  Upcoming Deadlines
                </Typography>
                <Stack spacing={1} mt={1}>
                  {deadlines.map((deadline) => (
                    <Box
                      key={deadline.title}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        bgcolor: "rgba(255,255,255,0.04)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography fontWeight={700}>{deadline.title}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {deadline.date}
                        </Typography>
                      </Box>
                      <ArrowRight size={18} />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </CustomCard>
          </Grid>
        </Grid>

        <QuickActions />
      </Stack>
    </MainLayout>
  );
}

export default Dashboard;