import CustomCard from "../common/Card";
import { Typography, Box } from "@mui/material";

function ActivityCard({
  title,
  description,
  time,
}) {
  return (
    <CustomCard>
      <Typography
        variant="subtitle1"
        fontWeight="700"
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        mt={1}
      >
        {description}
      </Typography>

      <Box mt={2}>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          {time}
        </Typography>
      </Box>
    </CustomCard>
  );
}

export default ActivityCard;