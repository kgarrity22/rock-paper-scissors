import { Box, Typography, useTheme } from "@mui/material";
import { RPSGameHistoryType } from "../types";

/**
 * Displays WLT record of games played
 * - saves record to local storage
 */
export const RPSGameHistory = ({
  gameCounts,
}: {
  gameCounts: RPSGameHistoryType;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: "auto",
        mb: theme.spacing(2),
        mt: theme.spacing(1),
        border: "2px solid #00afb9",
        borderRadius: 2,
        p: theme.spacing(1),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: 300,
        color: "#fff",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body1"
        sx={{ textTransform: "uppercase", fontWeight: "bold" }}
      >
        Game History
      </Typography>
      <Box display="flex" sx={{ textTransform: "uppercase" }}>
        <Typography variant="body2" sx={{ pr: theme.spacing(1) }}>
          Wins: {gameCounts.wins}
        </Typography>
        <Typography variant="body2" sx={{ pr: theme.spacing(1) }}>
          Ties: {gameCounts.ties}
        </Typography>
        <Typography variant="body2">Losses: {gameCounts.losses}</Typography>
      </Box>
    </Box>
  );
};
