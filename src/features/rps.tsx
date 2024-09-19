import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { RPSSelectionOption, RPSSelectionType } from "./types";
import { RPSSelectionCard } from "./rps-selection/rps-selection-card";
import { QuestionMark } from "@mui/icons-material";
import { getRandom } from "../utils";

export const RPS = () => {
  const theme = useTheme();

  const [userSelectedOption, setUserSelectedOption] =
    useState<RPSSelectionType | null>(null);

  const computerChoices: RPSSelectionType[] = ["Rock", "Paper", "Scissors"];
  const [computerSelectedOption, setComputerSelectedOption] =
    useState<RPSSelectionType | null>(null);

  const [isUserWinner, setIsUserWinner] = useState<boolean | null>(null);
  const [showWinner, setShowWinner] = useState(false);

  const rpsOptions: RPSSelectionOption[] = [
    { name: "Rock", icon: "✊" },
    { name: "Paper", icon: "✋" },
    { name: "Scissors", icon: "✌️" },
  ];

  const countdownTextArray = ["Rock", "Paper", "Scissors", "Shoot"];
  const [countdownText, setCountdownText] = useState("");

  // todo: pull initial stash from cache
  const [gameHistory, setGameHistory] = useState({
    wins: 0,
    ties: 0,
    losses: 0,
  });

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

  const [count, setCount] = useState(-4);

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
        m: theme.spacing(1),
        ml: theme.spacing(4),
        mr: theme.spacing(4),
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 40, sm: 50 },
          }}
        >
          Rock, Paper Scissors!
        </Typography>

        {/* TODO: turn this into its own little component (handle the cache logic in there) */}
        {/* GAME HISTORY*/}
        <Box
          sx={{
            mb: theme.spacing(2),
            border: "2px solid #00afb9",
            borderRadius: 2,
            p: theme.spacing(1),
            mt: theme.spacing(1),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
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
              Wins: {gameHistory.wins}
            </Typography>
            <Typography variant="body2" sx={{ pr: theme.spacing(1) }}>
              Ties: {gameHistory.ties}
            </Typography>
            <Typography variant="body2">
              Losses: {gameHistory.losses}
            </Typography>
          </Box>
        </Box>
        {/* END GAME HISTORY*/}

        {/* INSTRUCTIONS for hame play*/}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: {
              xs: theme.spacing(4),
              sm: theme.spacing(6),
            },
            fontSize: 18,
            // fading props
            width: userSelectedOption ? 0 : 350,
            height: 0,
            opacity: userSelectedOption ? 0 : 1,
            transition: "opacity 0.5s ease, width 0.5s ease 0.5s",
          }}
        >
          Click on the icon below to make your choice or type "r", "p", or "s"
          to begin
        </Typography>
        {/* END INSTRUCTIONS for hame play*/}

        {/* CHOICE DISPLAY TEXT */}
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            width: "100%",
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                width: userSelectedOption ? "100%" : 0,
                opacity: userSelectedOption ? 1 : 0,
                transition: "opacity 1s ease 1s, width 0.5s ease 0.5s",
              }}
            >
              Your Choice:
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              width: userSelectedOption ? "0" : 0,
              opacity: userSelectedOption ? 1 : 0,
              transition: "opacity 1s ease 1s, width 0.5s ease 0.5s",
            }}
          >
            <Typography variant="body1">Computer's Choice:</Typography>
            <QuestionMark sx={{ fontSize: 70 }} />
          </Box>
        </Box>

        {/* CHOOSE CARD: --> Cards and also history display  */}
        <Box
          display="flex"
          flexWrap="wrap"
          width="100%"
          alignItems="center"
          justifyContent={userSelectedOption ? "flex-start" : "center"}
          sx={{
            position: "relative",
            height: userSelectedOption ? 0 : "unset",
          }}
        >
          {rpsOptions.map((option: RPSSelectionOption) => (
            <Box
              key={option.name}
              onClick={() => setUserSelectedOption(option.name)}
              sx={{
                m: !userSelectedOption ? theme.spacing(2.5) : 0,
                mt: 0,
                width:
                  !userSelectedOption || userSelectedOption === option.name
                    ? 200
                    : 0,
                opacity:
                  !userSelectedOption || userSelectedOption === option.name
                    ? 1
                    : 0,
                transform:
                  userSelectedOption === option.name
                    ? "scale(0.4) translate(-70%, -140%)"
                    : "",
                transition:
                  "opacity 0.5s ease, margin 0.5s ease, width 2s ease, transform 1s ease 1s",
              }}
            >
              <RPSSelectionCard
                text={option.icon}
                onClick={() => {
                  setUserSelectedOption(option.name);
                }}
              />
            </Box>
          ))}
        </Box>
        {/* END CHOOSE CARD: --> Cards and also history display  */}

        {/* ACTION: Fists that shake --> also needs to handle the logic */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // width: "100%",
            textAlign: "center",
          }}
        >
          <Box
            display="flex"
            sx={{
              position: "relative",
              mb: theme.spacing(2),
              // width: "100%",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                margin: 0,
                padding: 0,
                opacity: shouldShake ? 1 : 0,
                height: shouldShake ? "fit-content" : 0,
                transition: "height .5s ease, opacity 1s ease",
                transitionDelay: shouldShake ? "0s" : "1.5s",
                position: "absolute",
              }}
            >
              {countdownText.length ? `${countdownText}!` : ""}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                opacity: showWinner ? 1 : 0,

                height: showWinner ? "fit-content" : 0,
                transition:
                  "height 1s ease 4s, width 1s ease 4s, opacity 1s ease 2s",
              }}
            >
              {isUserWinner ? "You win! 😄" : "Computer wins 😕"}
            </Typography>
          </Box>

          {/** FISTS Shaking */}
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                gap: theme.spacing(3),
                width: userSelectedOption ? "100%" : 0,
                opacity: userSelectedOption ? 1 : 0,
                transition: "opacity 1s ease 2.2s, width 1s ease 1.2s",
              }}
            >
              <Typography
                className="shake-left"
                sx={{
                  fontSize: 100,
                  animation: shouldShake ? "shake-left 0.7s 4 ease-in-out" : "",
                  opacity: showWinner ? 0 : 1,
                  height: showWinner ? 0 : "100%",
                  transition:
                    "width .1s ease .5s, height .1s ease .5s, opacity .5s ease",
                }}
              >
                👊
              </Typography>

              <Typography
                className="shake-right"
                sx={{
                  fontSize: 100,
                  animation: shouldShake
                    ? "shake-right 0.7s 4 ease-in-out"
                    : "",
                  opacity: showWinner ? 0 : 1,
                  height: showWinner ? 0 : "100%",
                  transition:
                    "width .1s ease .5s, height .1s ease .5s, opacity .5s ease",
                }}
              >
                👊
              </Typography>
            </Box>
            {/** END FISTS Shaking */}

            {/** FIST SHAKE REsult */}
            <Box
              display="flex"
              sx={{
                justifyContent: "center",
                gap: theme.spacing(3),
                mt: theme.spacing(3),
                opacity: showWinner ? 1 : 0,
                width: showWinner ? "100%" : 0,
                height: showWinner ? "100%" : 0,
                transition:
                  "width .1s ease, height .1s ease, opacity .5s ease .6s",
              }}
            >
              <Box>
                {userSelectedOption && (
                  <RPSSelectionCard
                    height={150}
                    width={100}
                    fontSize={50}
                    sx={{ borderRadius: "20px", border: "1px solid" }}
                    text={
                      rpsOptions.find((el) => el.name === userSelectedOption)
                        ?.icon ?? ""
                    }
                  />
                )}
              </Box>
              <Box>
                {computerSelectedOption && (
                  <RPSSelectionCard
                    height={150}
                    width={100}
                    fontSize={50}
                    sx={{ borderRadius: "20px", border: "1px solid" }}
                    text={
                      rpsOptions.find(
                        (el) => el.name === computerSelectedOption
                      )?.icon ?? ""
                    }
                  />
                )}
              </Box>
              {/** END FIST SHAKE REsult */}
            </Box>
            {/**************************************************** */}
          </Box>
          {/* <Button variant="contained" sx={{ height: 50, width: 300 }}>
            Play Again
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};
