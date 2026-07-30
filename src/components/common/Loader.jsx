import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      minHeight="200px"
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;