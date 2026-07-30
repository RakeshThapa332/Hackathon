import { useRef, useState } from "react";
import CustomCard from "../components/common/Card";
import {
  Alert,
  Box,
  Button,
  CardContent,
  Chip,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

function Upload() {
  const inputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBrowse = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selected = Array.from(event.target.files);

    const uploadedFiles = selected.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2),
      status: "Ready",
    }));

    setFiles((prev) => [...prev, ...uploadedFiles]);
    setSuccess(false);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleUpload = () => {
    if (!files.length) return;

    setUploading(true);

    setTimeout(() => {
      setFiles((prev) =>
        prev.map((file) => ({
          ...file,
          status: "Uploaded",
        }))
      );

      setUploading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700} mb={1}>
        Upload Center
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 620 }}>
        Upload research proposals, reports, datasets and supporting documents with secure, streamlined file management.
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 3, borderRadius: 3 }}>
          Files uploaded successfully.
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <CustomCard sx={{ minHeight: 560, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Stack spacing={3}>
              <Paper
                variant="outlined"
                sx={{
                  borderStyle: "dashed",
                  borderWidth: 2,
                  borderColor: "rgba(79, 70, 229, 0.36)",
                  p: 5,
                  textAlign: "center",
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <CloudUploadRoundedIcon
                  color="primary"
                  sx={{ fontSize: 70 }}
                />

                <Typography variant="h6" fontWeight={700} sx={{ mt: 2 }}>
                  Drag & Drop Files
                </Typography>

                <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
                  PDF, DOCX, XLSX, CSV or ZIP files
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<UploadFileRoundedIcon />}
                  onClick={handleBrowse}
                  sx={{ borderRadius: 3, textTransform: "none" }}
                >
                  Browse Files
                </Button>

                <input
                  hidden
                  multiple
                  ref={inputRef}
                  type="file"
                  onChange={handleFileChange}
                />
              </Paper>

              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleUpload}
                disabled={!files.length || uploading}
                sx={{ borderRadius: 3, textTransform: "none" }}
              >
                Upload Files
              </Button>

              {uploading && <LinearProgress />}
            </Stack>
          </CustomCard>
        </Grid>

        <Grid item xs={12} md={7}>
          <CustomCard sx={{ minHeight: 560 }}>
            <Typography variant="h6" fontWeight={700}>
              Selected Files
            </Typography>

            <Divider sx={{ my: 2 }} />

            {files.length === 0 ? (
              <Box py={8} textAlign="center">
                <InsertDriveFileRoundedIcon
                  sx={{
                    fontSize: 70,
                    color: "text.disabled",
                  }}
                />

                <Typography color="text.secondary" sx={{ mt: 2 }}>
                  No files selected.
                </Typography>
              </Box>
            ) : (
              <List>
                {files.map((file) => (
                  <ListItem
                    key={file.id}
                    divider
                    secondaryAction={
                      <Stack direction="row" spacing={1}>
                        <Button
                          size="small"
                          startIcon={<DownloadRoundedIcon />}
                          sx={{ textTransform: "none" }}
                        >
                          View
                        </Button>

                        <Button
                          size="small"
                          color="error"
                          startIcon={<DeleteOutlineRoundedIcon />}
                          onClick={() => removeFile(file.id)}
                          sx={{ textTransform: "none" }}
                        >
                          Remove
                        </Button>
                      </Stack>
                    }
                  >
                    <ListItemAvatar>
                      <InsertDriveFileRoundedIcon color="primary" />
                    </ListItemAvatar>

                    <ListItemText
                      primary={file.name}
                      secondary={`${file.size} MB`}
                    />

                    <Chip
                      icon={
                        file.status === "Uploaded" ? (
                          <CheckCircleRoundedIcon />
                        ) : undefined
                      }
                      label={file.status}
                      color={
                        file.status === "Uploaded"
                          ? "success"
                          : "warning"
                      }
                      sx={{ mr: 2 }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </CustomCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Upload;