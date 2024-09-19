import { Box, Typography } from "@mui/material";

// this should actually be on every page
export const RPSGameHistory = () => {
  // pull from local storage
  return (
    <Box>
      <Typography variant="caption">Win History</Typography>
      <Typography>You: {}</Typography>
      <Typography>Computer: {}</Typography>
    </Box>
  );
};
