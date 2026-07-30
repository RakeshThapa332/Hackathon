import { Box, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

function EmptyState({
  title = "No Data Found",
  subtitle = "There is nothing to display."
}) {
  return (
    <Box
      textAlign="center"
      py={6}
    >
      <InboxIcon
        sx={{
          fontSize: 70,
          color: "gray",
          mb: 2,
        }}
      />

      <Typography variant="h6">
        {title}
      </Typography>

      <Typography color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default EmptyState;