import { useRef, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
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
      <Typography variant="h4" fontWeight={700}>
        Upload Center
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Upload research proposals, reports, datasets and supporting documents.
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Files uploaded successfully.
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Card elevation={2}>
            <CardContent>
              <Stack spacing={3}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderStyle: "dashed",
                    borderWidth: 2,
                    borderColor: "primary.main",
                    p: 5,
                    textAlign: "center",
                    borderRadius: 3,
                  }}
                >
                  <CloudUploadRoundedIcon
                    color="primary"
                    sx={{ fontSize: 70 }}
                  />

                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{ mt: 2 }}
                  >
                    Drag & Drop Files
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 1, mb: 3 }}
                  >
                    PDF, DOCX, XLSX, CSV or ZIP files
                  </Typography>

                  <Button
                    variant="contained"
                    startIcon={<UploadFileRoundedIcon />}
                    onClick={handleBrowse}
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
                >
                  Upload Files
                </Button>

                {uploading && <LinearProgress />}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h6" fontWeight={700}>
                Selected Files
              </Typography>

              <Divider sx={{ my: 2 }} />

              {files.length === 0 ? (
                <Box py={6} textAlign="center">
                  <InsertDriveFileRoundedIcon
                    sx={{
                      fontSize: 70,
                      color: "text.disabled",
                    }}
                  />

                  <Typography
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
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
                          >
                            View
                          </Button>

                          <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteOutlineRoundedIcon />}
                            onClick={() => removeFile(file.id)}
                          >
                            Remove
                          </Button>
                        </Stack>
                      }
                    >
                      <ListItemAvatar>
                        <InsertDriveFileRoundedIcon
                          color="primary"
                        />
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
                        sx={{ mr: 18 }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Upload;