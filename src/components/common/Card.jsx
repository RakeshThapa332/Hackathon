import { Card, CardContent } from "@mui/material";

function CustomCard({ children, sx = {} }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "#1E293B",
        color: "white",
        boxShadow: 3,
        ...sx,
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export default CustomCard;