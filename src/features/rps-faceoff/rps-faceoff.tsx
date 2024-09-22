import { Box, Button, Typography, useTheme } from "@mui/material";
import { RPSSelectionCard } from "../rps-selection/rps-selection-card";
import { rpsOptions } from "../constants";
import { FistDirectionType, RPSSelectionType } from "../types";

/**
 * Animated fist emojis to simulate the action of RPS game
 */
const ShakingFist = ({
  side,
  shouldShake,
  showWinner,
}: {
  side: FistDirectionType;
  shouldShake: boolean;
  showWinner: boolean;
}) => {
  return (
    <Typography
      className={`shake-${side}`}
      sx={{
        fontSize: 100,
        animation: shouldShake ? `shake-${side} 0.7s 4 ease-in-out` : "",
        opacity: showWinner ? 0 : 1,
        height: showWinner ? 0 : "100%",
        transition: "width .1s ease .5s, height .1s ease .5s, opacity .5s ease",
      }}
    >
      👊
    </Typography>
  );
};

/**
 * Helper fx for displaying correct game result message
 */
const getWinnerText = (wlt: number) => {
  switch (wlt) {
    case 0: {
      return "Tie! 🤝";
    }
    case 1: {
      return "You Win! 😄";
    }
    case -1: {
      return "Computer Wins 😕";
    }
    default: {
      return "";
    }
  }
};

/**
 * Component for showing the action of the RPS game after selections have made
 * - shows the countdown, fists shaking, computer selection and winner result as well as restart button
 */
export const RPSFaceoff = ({
  shouldShake,
  countdownText,
  showWinner,
  isUserWinner,
  userSelectedOption,
  computerSelectedOption,
  onRestartClicked,
}: {
  shouldShake: boolean;
  countdownText: string;
  showWinner: boolean;
  isUserWinner: number;
  userSelectedOption: RPSSelectionType | null;
  computerSelectedOption: RPSSelectionType | null;
  onRestartClicked: () => void;
}) => {
  const theme = useTheme();
  const fistDirections: FistDirectionType[] = ["left", "right"];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        mt: {
          xs: theme.spacing(20),
          sm: theme.spacing(5),
        },
      }}
    >
      <Box
        display="flex"
        sx={{
          position: "relative",
          mb: theme.spacing(2),
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
          {getWinnerText(isUserWinner)}
        </Typography>
      </Box>
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
        {fistDirections.map((side) => (
          <ShakingFist
            key={side}
            side={side}
            shouldShake={shouldShake}
            showWinner={showWinner}
          />
        ))}
      </Box>

      <Box
        display="flex"
        sx={{
          gap: theme.spacing(3),
          mt: theme.spacing(3),
          opacity: showWinner ? 1 : 0,
          width: showWinner ? "100%" : 0,
          height: showWinner ? "100%" : 0,
          transition: "width .1s ease, height .1s ease, opacity .5s ease .6s",
        }}
      >
        {[userSelectedOption, computerSelectedOption].map((o, i) => (
          <RPSSelectionCard
            key={`${o}-${i}`}
            height={150}
            width={100}
            fontSize={50}
            sx={{ borderRadius: "20px", border: "1px solid" }}
            text={rpsOptions.find((el) => el.name === o)?.icon ?? ""}
          />
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ mt: theme.spacing(10) }}
      >
        <Button
          variant="outlined"
          sx={{
            height: showWinner ? 75 : 0,
            width: 200,
            border: "4px solid #00afb9",
            fontSize: 30,
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#fff",
            "&:hover": {
              border: "4px solid #fff",
            },
            opacity: showWinner ? 1 : 0,
            transition: "height 1s ease 1s, opacity 1s ease 2s",
          }}
          onClick={onRestartClicked}
        >
          Restart
        </Button>
      </Box>
    </Box>
  );
};
