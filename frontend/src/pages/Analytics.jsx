import {
  Box,
  Grid,
  CardContent,
  Typography,
  Stack,
  Chip,
  Divider,
  LinearProgress,
} from "@mui/material";

import { TrendingUp, Description, Upload, Groups } from "@mui/icons-material";

import MainLayout from "../components/layout/MainLayout";
import CustomCard from "../components/common/Card";

const stats = [
  {
    title: "Documents Processed",
    value: "2,846",
    change: "+18%",
    icon: <Description />,
  },
  {
    title: "Uploads",
    value: "463",
    change: "+12%",
    icon: <Upload />,
  },
  {
    title: "Active Users",
    value: "156",
    change: "+7%",
    icon: <Groups />,
  },
  {
    title: "AI Accuracy",
    value: "97.8%",
    change: "+1.2%",
    icon: <TrendingUp />,
  },
];

const activity = [
  {
    title: "Research Report",
    progress: 92,
  },
  {
    title: "Grant Proposal",
    progress: 74,
  },
  {
    title: "Financial Dataset",
    progress: 61,
  },
  {
    title: "Medical Records",
    progress: 88,
  },
];

function Analytics() {
  return (
    <MainLayout>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Box>
            <Typography variant="h4" fontWeight={700}>
              Analytics
            </Typography>

            <Typography color="text.secondary">
              Overview of platform performance and AI insights.
            </Typography>
          </Box>

          <Chip color="primary" label="Live Analytics" />
        </Stack>

        <Grid container spacing={3}>
          {stats.map((item) => (
            <Grid item xs={12} sm={6} lg={3} key={item.title}>
              <CustomCard
                sx={{
                  borderRadius: 3,
                  border: "1px solid rgba(148, 163, 184, 0.12)",
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Typography variant="body2" color="grey.400">
                        {item.title}
                      </Typography>

                      <Typography variant="h4" fontWeight="bold" mt={1}>
                        {item.value}
                      </Typography>

                      <Chip
                        size="small"
                        color="success"
                        label={item.change}
                        sx={{ mt: 2 }}
                      />
                    </Box>

                    <Box
                      sx={{
                        background: "#2563eb22",
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Stack>
                </CardContent>
              </CustomCard>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} lg={8}>
            <CustomCard
              sx={{
                borderRadius: 3,
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={700}>
                  Monthly Performance
                </Typography>

                <Typography variant="body2" color="grey.400" mb={3}>
                  Chart component will appear here.
                </Typography>

                <Box
                  sx={{
                    height: 340,
                    borderRadius: 2,
                    bgcolor: "#0f172a",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px dashed #334155",
                  }}
                >
                  <Typography color="grey.500">
                    Line Chart Placeholder
                  </Typography>
                </Box>
              </CardContent>
            </CustomCard>
          </Grid>

          <Grid item xs={12} lg={4}>
            <CustomCard
              sx={{
                borderRadius: 3,
                border: "1px solid rgba(148, 163, 184, 0.12)",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={700}>
                  Processing Status
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Stack spacing={3}>
                  {activity.map((item) => (
                    <Box key={item.title}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        mb={1}
                      >
                        <Typography>{item.title}</Typography>

                        <Typography color="primary.main">
                          {item.progress}%
                        </Typography>
                      </Stack>

                      <LinearProgress
                        variant="determinate"
                        value={item.progress}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
}

export default Analytics;
