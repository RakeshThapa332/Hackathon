import CustomCard from "../common/Card";
import { Typography, Box } from "@mui/material";

function MetricCard({
  title,
  value,
  icon,
  color = "#2563EB",
  subtitle,
}) {
  return (
    <CustomCard
      sx={{
        height: "100%",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="body2" color="gray">
            {title}
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            mt={1}
          >
            {value}
          </Typography>

          {subtitle && (
            <Typography
              variant="caption"
              color="gray"
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            width: 55,
            height: 55,
            borderRadius: "50%",
            background: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          {icon}
        </Box>
      </Box>
    </CustomCard>
  );
}

export default MetricCard;