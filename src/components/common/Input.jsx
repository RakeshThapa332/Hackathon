import { TextField } from "@mui/material";

function Input({
  label,
  type = "text",
  value,
  onChange,
  fullWidth = true,
  ...props
}) {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      variant="outlined"
      {...props}
    />
  );
}

export default Input;