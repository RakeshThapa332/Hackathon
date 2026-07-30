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
        fontWeight="bold"
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="gray"
        mt={1}
      >
        {description}
      </Typography>

      <Box mt={2}>
        <Typography
          variant="caption"
          color="gray"
        >
          {time}
        </Typography>
      </Box>
    </CustomCard>
  );
}

export default ActivityCard;