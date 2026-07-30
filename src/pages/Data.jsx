import { useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
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

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import RefreshIcon from "@mui/icons-material/Refresh";
import DescriptionIcon from "@mui/icons-material/Description";

const rows = [
  {
    id: "DS-001",
    name: "Research Grant Applications",
    owner: "Dr. Smith",
    records: 523,
    updated: "Today",
    status: "Active",
    completion: 92,
  },
  {
    id: "DS-002",
    name: "Financial Reports",
    owner: "Finance Office",
    records: 188,
    updated: "Yesterday",
    status: "Pending",
    completion: 61,
  },
  {
    id: "DS-003",
    name: "Project Milestones",
    owner: "Project Manager",
    records: 96,
    updated: "2 days ago",
    status: "Active",
    completion: 81,
  },
  {
    id: "DS-004",
    name: "Researchers Database",
    owner: "Administration",
    records: 1268,
    updated: "Today",
    status: "Completed",
    completion: 100,
  },
  {
    id: "DS-005",
    name: "Publication Records",
    owner: "Research Office",
    records: 417,
    updated: "Last week",
    status: "Active",
    completion: 76,
  },
];

function StatCard({ title, value, color }) {
  return (
    <Card elevation={2}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}

function Data() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [anchorEl, setAnchorEl] = useState(null);

  const filteredRows = useMemo(() => {
    return rows.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.owner.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const paginated = filteredRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const statusChip = (status) => {
    switch (status) {
      case "Completed":
        return <Chip label={status} color="success" size="small" />;
      case "Pending":
        return <Chip label={status} color="warning" size="small" />;
      default:
        return <Chip label={status} color="primary" size="small" />;
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700}>
        Data Management
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Monitor, organise and manage datasets used throughout the system.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <StatCard title="Datasets" value="18" color="primary.main" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Total Records" value="2,492" color="success.main" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Active Projects" value="12" color="warning.main" />
        </Grid>

        <Grid item xs={12} md={3}>
          <StatCard title="Storage Used" value="8.6 GB" color="info.main" />
        </Grid>
      </Grid>

      <Card elevation={2}>
        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ md: "center" }}
            sx={{ mb: 2 }}
          >
            <TextField
              size="small"
              placeholder="Search datasets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: { xs: "100%", md: 350 } }}
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
                startIcon={<RefreshIcon />}
                variant="outlined"
              >
                Refresh
              </Button>

              <Button
                startIcon={<DownloadIcon />}
                variant="contained"
              >
                Export
              </Button>
            </Stack>
          </Stack>

          <Divider sx={{ mb: 2 }} />

          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Dataset</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell>Records</TableCell>
                  <TableCell>Progress</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Updated</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {paginated.map((row) => (
                  <TableRow hover key={row.id}>
                    <TableCell>{row.id}</TableCell>

                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar>
                          <DescriptionIcon />
                        </Avatar>

                        <Typography fontWeight={600}>
                          {row.name}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>{row.owner}</TableCell>

                    <TableCell>{row.records}</TableCell>

                    <TableCell sx={{ width: 180 }}>
                      <LinearProgress
                        variant="determinate"
                        value={row.completion}
                        sx={{ mb: 1 }}
                      />

                      <Typography variant="caption">
                        {row.completion}%
                      </Typography>
                    </TableCell>

                    <TableCell>{statusChip(row.status)}</TableCell>

                    <TableCell>{row.updated}</TableCell>

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
            count={filteredRows.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={(e, newPage) => setPage(newPage)}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
          />
        </CardContent>
      </Card>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => setAnchorEl(null)}>View</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Edit</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Download</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Delete</MenuItem>
      </Menu>
    </Box>
  );
}

export default Data;