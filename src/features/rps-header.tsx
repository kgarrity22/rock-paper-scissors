import { Box, Typography, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

export const RPSHeader = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 40, sm: 50 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: theme.spacing(2),
          color: "white",
        }}
      >
        Rock, Paper, Scissors!
      </Typography>
      <Outlet />
    </Box>
  );
};
