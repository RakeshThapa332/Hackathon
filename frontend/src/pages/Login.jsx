import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const result = await login(
        form.email,
        form.password,
        form.remember
      );

      if (result.success) {
        navigate("/");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Card
        elevation={10}
        sx={{
          width: "100%",
          maxWidth: 480,
          borderRadius: 4,
          backdropFilter: "blur(24px)",
          background: "rgba(15, 23, 42, 0.88)",
          border: "1px solid rgba(148, 163, 184, 0.18)",
        }}
      >
        <CardContent sx={{ p: 5 }}>
          <Stack spacing={3}>
            <Stack spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 76,
                  height: 76,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 18px 40px rgba(79, 70, 229, 0.28)",
                }}
              >
                <LockOutlinedIcon sx={{ color: "#fff", fontSize: 36 }} />
              </Box>

              <Box textAlign="center">
                <Typography variant="h4" fontWeight={700}>
                  Welcome Back
                </Typography>

                <Typography color="text.secondary">
                  Sign in to continue to your dashboard
                </Typography>
              </Box>
            </Stack>

            <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.16)" }} />

            {error && <Alert severity="error">{error}</Alert>}

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  sx={{ bgcolor: "rgba(255,255,255,0.04)", borderRadius: 2 }}
                />

                <TextField
                  fullWidth
                  required
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  sx={{ bgcolor: "rgba(255,255,255,0.04)", borderRadius: 2 }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={form.remember}
                        onChange={handleChange}
                        name="remember"
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                      />
                    }
                    label="Remember me"
                    sx={{ color: "var(--text-secondary)" }}
                  />

                  <Link component={RouterLink} to="/forgot-password" underline="hover">
                    Forgot Password?
                  </Link>
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={loading}
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
                  sx={{
                    py: 1.5,
                    borderRadius: 3,
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </Stack>
            </Box>

            <Divider sx={{ borderColor: "rgba(148, 163, 184, 0.16)" }} />

            <Typography textAlign="center" color="text.secondary">
              Don't have an account?{' '}
              <Link component={RouterLink} to="/register" underline="hover" fontWeight={600}>
                Create Account
              </Link>
            </Typography>

            <Box
              sx={{
                bgcolor: "rgba(255,255,255,0.04)",
                p: 3,
                borderRadius: 3,
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}
            >
              <Typography variant="body2" fontWeight={700} gutterBottom>
                Demo Credentials
              </Typography>
              <Typography variant="body2">
                <strong>Email:</strong> admin@example.com
              </Typography>
              <Typography variant="body2">
                <strong>Password:</strong> admin123
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;