import { Box, useTheme } from "@mui/material";
import { RPSSelection } from "./rps-selection";

export const RPS = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ m: theme.spacing(1), ml: theme.spacing(4), mr: theme.spacing(4) }}
    >
      <RPSSelection />
    </Box>
  );
};
