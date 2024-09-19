import { Box, Typography, useTheme } from "@mui/material";
import { RPSSelectionCard } from "../rps-selection/rps-selection-card";
import { rpsOptions } from "../contstants";
import { RPSSelectionType } from "../types";
type FistDirectionType = "left" | "right";
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

export const RPSFaceoff = ({
  shouldShake,
  countdownText,
  showWinner,
  isUserWinner,
  userSelectedOption,
  computerSelectedOption,
}: {
  shouldShake: boolean;
  countdownText: string;
  showWinner: boolean;
  isUserWinner: boolean;
  userSelectedOption: RPSSelectionType;
  computerSelectedOption: RPSSelectionType;
}) => {
  // need to know what the selection is
  const theme = useTheme();
  const fistDirections: FistDirectionType[] = ["left", "right"];

  ///
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/** */}
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
          {isUserWinner ? "You win! 😄" : "Computer wins 😕"}
        </Typography>
      </Box>

      {/** FISTS Shaking */}

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
          transition: "width .1s ease, height .1s ease, opacity .5s ease .6s",
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
                rpsOptions.find((el) => el.name === userSelectedOption)?.icon ??
                ""
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
                rpsOptions.find((el) => el.name === computerSelectedOption)
                  ?.icon ?? ""
              }
            />
          )}
        </Box>
        {/** END FIST SHAKE REsult */}
      </Box>
    </Box>
  );
};
