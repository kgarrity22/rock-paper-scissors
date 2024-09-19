import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        m: {
          xs: theme.spacing(1),
          sm: theme.spacing(5),
        },
        mt: {
          xs: theme.spacing(1),
          sm: theme.spacing(1),
        },
        mb: {
          xs: theme.spacing(3),
          sm: theme.spacing(6),
        },
        scrollbarWidth: "none", // Hide the scrollbar for firefox
        "&::-webkit-scrollbar'": {
          display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
        },
        "&-ms-overflow-style:": {
          display: "none", // Hide the scrollbar for IE
        },
      }}
    >
      <Outlet />
    </Box>
  );
};
