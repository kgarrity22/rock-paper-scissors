import { Box, Typography } from "@mui/material";

export const RPSFaceoff = ({}: {}) => {
  // need to know what the selection is
  // the two fists rotated next to each other Your choice:
  const computerChoices = ["Rock", "Paper", "Scissors"];

  ///
  return (
    <Box>
      <Typography>Rock Paper Scissors</Typography>
      <Typography>Game History</Typography>
      <Box display="flex">
        <Typography>Wins:</Typography>
        <Typography>Ties:</Typography>
        <Typography>Losses:</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ color: "white" }} variant="body1">
          Your Choice: {}
        </Typography>
        <Typography sx={{ color: "white" }} variant="body1">
          Computer's Choice: ?
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        {/* apply transformations to these things */}
        <Typography sx={{ fontSize: 100 }}>👊</Typography>
        <Typography sx={{ fontSize: 100 }}>👊</Typography>
      </Box>
    </Box>
  );
};
