import { Box, Typography } from "@mui/material";

export const RPSWinner = ({
  winner,
  winningSelection,
}: {
  winner: "user" | "computer";
  winningSelection: string;
}) => {
  // should show big --> which play won --> r p or s
  // who won --> You Win
  //             Computer wins :/
  // update the history
  // play again button that resets it all
  return (
    <Box>
      {winner === "computer" ? (
        <Typography>Computer wins 😕</Typography>
      ) : (
        <Typography>You win! 😄</Typography>
      )}
    </Box>
  );
};
