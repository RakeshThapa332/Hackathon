import { useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";

import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

function TabPanel({ children, value, index }) {
  return value === index ? <Box sx={{ pt: 3 }}>{children}</Box> : null;
}

function Settings() {
  const [tab, setTab] = useState(0);

  const [profile, setProfile] = useState({
    firstName: "Sahil",
    lastName: "Kapali",
    email: "sahil@example.com",
    phone: "+977-9800000000",
    department: "Research",
    role: "Administrator",
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    darkMode: false,
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [saved, setSaved] = useState(false);

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePreferenceChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSecurityChange = (e) => {
    setSecurity({
      ...security,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Replace with API request
    console.log({
      profile,
      preferences,
      security,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={700}>
        Settings
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Manage your account preferences, notifications and security settings.
      </Typography>

      {saved && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Settings saved successfully.
        </Alert>
      )}

      <Card elevation={2}>
        <CardContent>
          <Tabs
            value={tab}
            onChange={(e, value) => setTab(value)}
            variant="scrollable"
          >
            <Tab
              icon={<PersonRoundedIcon />}
              iconPosition="start"
              label="Profile"
            />

            <Tab
              icon={<NotificationsRoundedIcon />}
              iconPosition="start"
              label="Notifications"
            />

            <Tab
              icon={<SecurityRoundedIcon />}
              iconPosition="start"
              label="Security"
            />
          </Tabs>

          <Divider />

          {/* Profile */}

          <TabPanel value={tab} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <Stack alignItems="center" spacing={2}>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      fontSize: 34,
                    }}
                  >
                    SK
                  </Avatar>

                  <Button variant="outlined">
                    Change Photo
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleProfileChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleProfileChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleProfileChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      select
                      label="Department"
                      name="department"
                      value={profile.department}
                      onChange={handleProfileChange}
                    >
                      <MenuItem value="Research">
                        Research
                      </MenuItem>

                      <MenuItem value="Finance">
                        Finance
                      </MenuItem>

                      <MenuItem value="Administration">
                        Administration
                      </MenuItem>
                    </TextField>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Role"
                      name="role"
                      value={profile.role}
                      onChange={handleProfileChange}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Notifications */}

          <TabPanel value={tab} index={1}>
            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.emailNotifications}
                    onChange={handlePreferenceChange}
                    name="emailNotifications"
                  />
                }
                label="Email Notifications"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.pushNotifications}
                    onChange={handlePreferenceChange}
                    name="pushNotifications"
                  />
                }
                label="Push Notifications"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.weeklyReports}
                    onChange={handlePreferenceChange}
                    name="weeklyReports"
                  />
                }
                label="Receive Weekly Reports"
              />

              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.darkMode}
                    onChange={handlePreferenceChange}
                    name="darkMode"
                  />
                }
                label="Dark Mode"
              />
            </Stack>
          </TabPanel>

          {/* Security */}

          <TabPanel value={tab} index={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Current Password"
                  type="password"
                  name="currentPassword"
                  value={security.currentPassword}
                  onChange={handleSecurityChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="New Password"
                  type="password"
                  name="newPassword"
                  value={security.newPassword}
                  onChange={handleSecurityChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={security.confirmPassword}
                  onChange={handleSecurityChange}
                />
              </Grid>
            </Grid>
          </TabPanel>

          <Divider sx={{ my: 3 }} />

          <Stack
            direction="row"
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              startIcon={<SaveRoundedIcon />}
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Settings;