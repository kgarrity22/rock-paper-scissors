import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { RPSGameHistoryType, RPSSelectionType } from "./types";
import { RPSGameHistory } from "./rps-game-history";
import { Outlet } from "react-router-dom";

export const RPS = () => {
  const theme = useTheme();

  // Vars for storing user and computer match selections
  const [userSelectedOption, setUserSelectedOption] =
    useState<RPSSelectionType | null>(null);
  const [computerSelectedOption, setComputerSelectedOption] =
    useState<RPSSelectionType | null>(null);

  // Vars for handling results of match
  const [winLossTie, setWinLossTie] = useState(0);

  // Grab cached game history (if it exists)
  const initialGameHistory = JSON.parse(
    localStorage.getItem(`rps-game-history`) ||
      `{"wins": 0, "ties": 0, "losses": 0}`
  );
  const [gameHistory, setGameHistory] =
    useState<RPSGameHistoryType>(initialGameHistory);

  // Cache game history whenever we updated it locally
  useEffect(() => {
    localStorage.setItem(`rps-game-history`, JSON.stringify(gameHistory));
  }, [gameHistory]);

  // Logic for determining who has won
  useEffect(() => {
    if (userSelectedOption && computerSelectedOption) {
      if (
        (userSelectedOption === "Rock" &&
          computerSelectedOption === "Scissors") ||
        (userSelectedOption === "Scissors" &&
          computerSelectedOption === "Paper") ||
        (userSelectedOption === "Paper" && computerSelectedOption === "Rock")
      ) {
        setWinLossTie(1);
        setGameHistory({ ...gameHistory, wins: (gameHistory.wins += 1) });
      } else {
        if (userSelectedOption === computerSelectedOption) {
          setWinLossTie(0);
          setGameHistory({
            ...gameHistory,
            ties: (gameHistory.ties += 1),
          });
        } else {
          setWinLossTie(-1);
          setGameHistory({
            ...gameHistory,
            losses: (gameHistory.losses += 1),
          });
        }
      }
    }
  }, [userSelectedOption, computerSelectedOption]);

  // if we're on /reset. --> redirect to home

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: theme.spacing(2),
          color: "white",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 40, sm: 50 },
          }}
        >
          Rock, Paper, Scissors!
        </Typography>
        <RPSGameHistory gameCounts={gameHistory} />
      </Box>
      <Outlet />
    </>
  );
};
