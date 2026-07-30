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
} from "lucide-react";

import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

function Dashboard() {
  return (
    <MainLayout>
      <Stack spacing={3}>
        <CustomCard
          sx={{
            background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.16)",
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            gap={2}
          >
            <Box>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                <Sparkles size={18} />
                <Typography variant="body2" fontWeight={600}>
                  Research Operations Overview
                </Typography>
              </Stack>

              <Typography variant="h4" fontWeight={700}>
                Welcome back, Admin
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
                Your grant workspace is running smoothly with fresh uploads, active AI conversations, and strong momentum.
              </Typography>
            </Box>

            <Box>
              <Chip
                label="Live Activity"
                sx={{
                  bgcolor: "rgba(255,255,255,0.16)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
        </CustomCard>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <MetricCard
              title="Users"
              value="120"
              subtitle="+12 this week"
              icon={<Users size={20} />}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <MetricCard
              title="Documents"
              value="1,200"
              subtitle="+45 uploaded"
              color="#06B6D4"
              icon={<FileText size={20} />}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <MetricCard
              title="Datasets"
              value="34"
              subtitle="Connected"
              color="#22C55E"
              icon={<Database size={20} />}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <MetricCard
              title="AI Requests"
              value="6,842"
              subtitle="Today"
              color="#F59E0B"
              icon={<Bot size={20} />}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <CustomCard sx={{ height: "100%" }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <TrendingUp size={18} color="#60A5FA" />
                <Typography variant="h6" fontWeight={700}>
                  Weekly Performance
                </Typography>
              </Stack>
              <Typography color="text.secondary">
                Engagement and document processing have increased steadily over the last 7 days.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "rgba(37, 99, 235, 0.08)",
                  color: "text.primary",
                }}
              >
                <Typography variant="body2" fontWeight={600}>
                  87% of pending tasks are advancing on schedule
                </Typography>
              </Box>
            </CustomCard>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <CustomCard sx={{ height: "100%" }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Clock3 size={18} color="#34D399" />
                <Typography variant="h6" fontWeight={700}>
                  Today’s Focus
                </Typography>
              </Stack>
              <Stack spacing={1.5}>
                <Typography variant="body2" color="text.secondary">
                  • Review 3 new grant proposals
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • Respond to 2 AI chat requests
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • Sync uploaded datasets
                </Typography>
              </Stack>
            </CustomCard>
          </Grid>
        </Grid>

        <QuickActions />

        <RecentActivity />
      </Stack>
    </MainLayout>
  );
}

export default Dashboard;