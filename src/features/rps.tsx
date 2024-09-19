import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { RPSGameHistoryType, RPSSelectionType } from "./types";
import { getRandom } from "../utils";
import { computerChoices, countdownTextArray } from "./contstants";
import { RPSGameHistory } from "./rps-game-history";
import { RPSInstructions } from "./rps-instructions";
import { RPSSelectionsDisplay } from "./rps-selections-display";
import { RPSSelection } from "./rps-selection";
import { RPSFaceoff } from "./rps-faceoff";

export const RPS = () => {
  const theme = useTheme();

  const [userSelectedOption, setUserSelectedOption] =
    useState<RPSSelectionType | null>(null);

  const [computerSelectedOption, setComputerSelectedOption] =
    useState<RPSSelectionType | null>(null);

  const [isUserWinner, setIsUserWinner] = useState<boolean | null>(null);
  const [showWinner, setShowWinner] = useState(false);
  const [countdownText, setCountdownText] = useState("");
  const [count, setCount] = useState(-4);

  // todo: pull initial stash from cache
  const [gameHistory, setGameHistory] = useState<RPSGameHistoryType>({
    wins: 0,
    ties: 0,
    losses: 0,
  });

  // TODO: local storage/cache stuff
  // localStorage.setItem(
  //   `${user?.sub}-kf-${projectId}-browseState`,
  //   `${t}`
  // );
  // const browseState = JSON.parse(
  //   localStorage.getItem(`${user?.sub}-kf-${projectId}-browseState`) ||
  //     "false"
  // );
  // const dataGridInitialState = JSON.parse(
  //   localStorage.getItem(`${user?.sub}-kf-${projectId}-gridState`) || "{}"
  // );

  // get the computer's choice once the user has decided
  useEffect(() => {
    if (userSelectedOption) {
      setComputerSelectedOption(getRandom<RPSSelectionType>(computerChoices));
    }
  }, [userSelectedOption]);

  // update who the winner is once both sides have chosen
  useEffect(() => {
    if (userSelectedOption && computerSelectedOption) {
      if (userSelectedOption && computerSelectedOption) {
        if (
          (userSelectedOption === "Rock" &&
            computerSelectedOption === "Scissors") ||
          (userSelectedOption === "Scissors" &&
            computerSelectedOption === "Paper") ||
          (userSelectedOption === "Paper" && computerSelectedOption === "Rock")
        ) {
          setIsUserWinner(true);
          setGameHistory({ ...gameHistory, wins: (gameHistory.wins += 1) });
        } else {
          setIsUserWinner(false);
          if (userSelectedOption === computerSelectedOption) {
            setGameHistory({
              ...gameHistory,
              ties: (gameHistory.ties += 1),
            });
          } else {
            setGameHistory({
              ...gameHistory,
              losses: (gameHistory.losses += 1),
            });
          }
        }
      }
    }
  }, [userSelectedOption, computerSelectedOption]);

  // delay -->
  // want both of those to be on the same timer

  // run this interval only once --> x thing is set
  // a little hacky but have this
  useEffect(() => {
    if (userSelectedOption && count <= 5) {
      //Implementing the setInterval method
      const interval = setInterval(() => {
        // very second, we want to update the count
        setCount(count + 1);
      }, 700);

      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [count, userSelectedOption]);

  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    // TODO: when the count hits 0, we activate the animation -->
    // when the count hits 0, we add the text
    if (count >= 0 && count < 4) {
      setCountdownText(countdownTextArray[count]);
      setShouldShake(true);
      //
    } else if (count >= 4) {
      setShouldShake(false);
      setShowWinner(true);
    }
  }, [count]);

  // once a user has made a selection, we want to switch to the faceoff
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: theme.spacing(2),
        ml: theme.spacing(4),
        mr: theme.spacing(4),
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
      <RPSInstructions userSelectedOption={userSelectedOption} />
      {/* combine these into one I think makes sense */}
      <RPSSelectionsDisplay userSelectedOption={userSelectedOption} />
      <RPSSelection
        userSelectedOption={userSelectedOption}
        setUserSelectedOption={setUserSelectedOption}
      />
      <RPSFaceoff
        shouldShake={shouldShake}
        countdownText={countdownText}
        showWinner={showWinner}
        isUserWinner={isUserWinner}
        userSelectedOption={userSelectedOption}
        computerSelectedOption={computerSelectedOption}
      />
    </Box>
  );
};
