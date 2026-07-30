import { Button } from "@mui/material";

function PrimaryButton({
  children,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  sx = {},
  ...props
}) {
  return (
    <Button
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        padding: "10px 18px",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;