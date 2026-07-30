import { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CustomCard from "../components/common/Card";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import AssessmentIcon from "@mui/icons-material/Assessment";
import RefreshIcon from "@mui/icons-material/Refresh";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const reports = [
  {
    id: "RPT-001",
    title: "Research Grant Summary",
    category: "Grant",
    author: "Admin",
    generated: "Today",
    status: "Completed",
    progress: 100,
  },
  {
    id: "RPT-002",
    title: "Financial Allocation Report",
    category: "Finance",
    author: "Finance Office",
    generated: "Yesterday",
    status: "Completed",
    progress: 100,
  },
  {
    id: "RPT-003",
    title: "Research Progress Report",
    category: "Research",
    author: "Project Manager",
    generated: "2 Days Ago",
    status: "Generating",
    progress: 72,
  },
  {
    id: "RPT-004",
    title: "Publication Analysis",
    category: "Publication",
    author: "Research Office",
    generated: "Last Week",
    status: "Pending",
    progress: 35,
  },
  {
    id: "RPT-005",
    title: "Annual Performance Report",
    category: "Performance",
    author: "Administrator",
    generated: "Today",
    status: "Completed",
    progress: 100,
  },
];

function SummaryCard({ title, value, color }) {
  return (
    <CustomCard sx={{ minHeight: 140 }}>
      <Typography color="text.secondary" variant="body2">
        {title}
      </Typography>

      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mt: 1, color }}
      >
        {value}
      </Typography>
    </CustomCard>
  );
}

function Reports() {
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredReports = useMemo(() => {
    return reports.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const paginated = filteredReports.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const statusChip = (status) => {
    switch (status) {
      case "Completed":
        return <Chip label={status} color="success" size="small" />;
      case "Generating":
        return <Chip label={status} color="info" size="small" />;
      default:
        return <Chip label={status} color="warning" size="small" />;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700}>
        Reports
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Generate, monitor and export reports across the research management
        system.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <SummaryCard
            title="Total Reports"
            value="124"
            color="primary.main"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <SummaryCard
            title="Generated Today"
            value="18"
            color="success.main"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <SummaryCard
            title="Pending"
            value="6"
            color="warning.main"
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <SummaryCard
            title="Downloads"
            value="2.3K"
            color="info.main"
          />
        </Grid>
      </Grid>

      <CustomCard>
        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <TextField
              size="small"
              placeholder="Search reports..."
              sx={{ width: { xs: "100%", md: 350 } }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<RefreshIcon />}
              >
                Refresh
              </Button>

              <Button
                variant="contained"
                startIcon={<AssessmentIcon />}
              >
                Generate Report
              </Button>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Report</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Progress</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Generated</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginated.map((report) => (
                  <TableRow hover key={report.id}>
                    <TableCell>{report.id}</TableCell>

                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                          <PictureAsPdfIcon />
                        </Avatar>

                        <Typography fontWeight={600}>
                          {report.title}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>{report.category}</TableCell>

                    <TableCell>{report.author}</TableCell>

                    <TableCell sx={{ width: 180 }}>
                      <LinearProgress
                        variant="determinate"
                        value={report.progress}
                        sx={{ mb: 1 }}
                      />

                      <Typography variant="caption">
                        {report.progress}%
                      </Typography>
                    </TableCell>

                    <TableCell>{statusChip(report.status)}</TableCell>

                    <TableCell>{report.generated}</TableCell>

                    <TableCell align="right">
                      <IconButton
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={filteredReports.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={(e, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
          />
        </CardContent>
      </CustomCard>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>
          View Report
        </MenuItem>

        <MenuItem onClick={() => setAnchorEl(null)}>
          Download PDF
        </MenuItem>

        <MenuItem onClick={() => setAnchorEl(null)}>
          Share
        </MenuItem>

        <MenuItem onClick={() => setAnchorEl(null)}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Reports;