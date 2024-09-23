import { Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { RPSGameHistoryType, RPSSelectionType } from "./types";
import { getRandom } from "../utils";
import { computerChoices, countdownTextArray } from "./constants";
import { RPSFaceoff } from "./rps-faceoff";
import { RPSInstructions } from "./rps-instructions";
import { RPSSelection } from "./rps-selection";
import { useNavigate } from "react-router-dom";
import { RPSGameHistory } from "./rps-game-history";

export const RPSLogic = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Vars for storing user and computer match selections
  const [userSelectedOption, setUserSelectedOption] =
    useState<RPSSelectionType | null>(null);
  const [computerSelectedOption, setComputerSelectedOption] =
    useState<RPSSelectionType | null>(null);

  // Vars for handling results of match
  const [winLossTie, setWinLossTie] = useState(0);
  const [showWinner, setShowWinner] = useState(false);

  // Vars for handling shake & countdown effect
  const [countdownText, setCountdownText] = useState("");
  const [count, setCount] = useState(-4);
  const [shouldShake, setShouldShake] = useState(false);

  const initialGameHistory = JSON.parse(
    localStorage.getItem(`rps-game-history`) ||
      `{ "wins": 0, "ties": 0, "losses": 0 }`
  );

  // Stores game history locally
  const [gameHistory, setGameHistory] =
    useState<RPSGameHistoryType>(initialGameHistory);

  const [gHText, setGHText] = useState<RPSGameHistoryType>(initialGameHistory);

  useEffect(() => {
    // Grab cached game history (if it exists)
    const initialGameHistory = JSON.parse(
      localStorage.getItem(`rps-game-history`) ||
        `{ "wins": 0, "ties": 0, "losses": 0 }`
    );
    setGameHistory(initialGameHistory);
    setGHText(gameHistory);
  }, []);

  // Update game history text (only once rest of UI has updated) & cache updated history
  useEffect(() => {
    if (showWinner) {
      // Update game history text
      setGHText(gameHistory);
      // Cache updated game history
      localStorage.setItem(`rps-game-history`, JSON.stringify(gameHistory));
    }
  }, [gameHistory, showWinner]);

  // Get the computer's choice when the user's choice changes
  useEffect(() => {
    if (userSelectedOption) {
      setComputerSelectedOption(getRandom<RPSSelectionType>(computerChoices));
    }
  }, [userSelectedOption]);

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

  // Count effect to handle timing for r, p, s text and shake effect
  useEffect(() => {
    if (userSelectedOption && count <= 5) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 700);
      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [count, userSelectedOption]);

  // Update countdown text and shake effect based on timer
  useEffect(() => {
    // When the count hits 0, we add the text & display one word every 0.7 s
    if (count >= 0 && count < 4) {
      setCountdownText(countdownTextArray[count]);
      setShouldShake(true);
    } else if (count >= 4) {
      // Stop the shake effect and prepare to display winner
      setShouldShake(false);
      setShowWinner(true);
    }
  }, [count]);

  return (
    <>
      <RPSGameHistory gameCounts={gHText} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          m: theme.spacing(2),
          ml: theme.spacing(4),
          mr: theme.spacing(4),
          color: "#fff",
          animation: "fade-in 4s ease",
        }}
      >
        <RPSInstructions userSelectedOption={userSelectedOption} />
        <RPSSelection
          userSelectedOption={userSelectedOption}
          setUserSelectedOption={setUserSelectedOption}
          computerSelectedOption={computerSelectedOption}
        />
        <RPSFaceoff
          shouldShake={shouldShake}
          countdownText={countdownText}
          showWinner={showWinner}
          isUserWinner={winLossTie}
          userSelectedOption={userSelectedOption}
          computerSelectedOption={computerSelectedOption}
          onRestartClicked={() => navigate("/restart")}
        />
      </Box>
    </>
  );
};
