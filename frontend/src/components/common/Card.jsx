import { Card, CardContent } from "@mui/material";

function CustomCard({ children, sx = {} }) {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "var(--bg-card)",
        color: "var(--text-primary)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-color)",
        boxShadow: "var(--shadow-card)",
        overflow: "hidden",
        ...sx,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {children}
      </CardContent>
    </Card>
  );
}

export default CustomCard;