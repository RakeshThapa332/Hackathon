import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 4,
        }}
      >
        <Card
          elevation={6}
          sx={{
            width: "100%",
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Stack spacing={3} alignItems="center">
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  bgcolor: "error.light",
                  color: "error.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ErrorOutlineRoundedIcon sx={{ fontSize: 55 }} />
              </Box>

              <Typography
                variant="h1"
                fontWeight={800}
                color="primary.main"
                sx={{
                  fontSize: {
                    xs: "4.5rem",
                    md: "7rem",
                  },
                  lineHeight: 1,
                }}
              >
                404
              </Typography>

              <Box>
                <Typography
                  variant="h4"
                  fontWeight={700}
                  gutterBottom
                >
                  Page Not Found
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    maxWidth: 500,
                    mx: "auto",
                  }}
                >
                  The page you are trying to access doesn't exist, has
                  been moved, or the URL is incorrect.
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 2 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<HomeRoundedIcon />}
                  onClick={() => navigate("/")}
                  sx={{
                    px: 4,
                    py: 1.3,
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Go to Dashboard
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ArrowBackRoundedIcon />}
                  onClick={() => navigate(-1)}
                  sx={{
                    px: 4,
                    py: 1.3,
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Go Back
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default NotFound;