import { Box, useTheme } from "@mui/material";
import { RPSSelectionCard } from "./rps-selection-card";
import { RPSSelectionOption, RPSSelectionType } from "../types";
import { RPSSelectionsDisplay } from "./rps-selections-display";

// Selection screen for the user in game of rps
export const RPSSelection = ({
  userSelectedOption,
  computerSelectedOption,
  setUserSelectedOption,
}: {
  userSelectedOption: RPSSelectionType | null;
  setUserSelectedOption: (s: RPSSelectionType) => void;
  computerSelectedOption: RPSSelectionType | null;
}) => {
  const rpsOptions: RPSSelectionOption[] = [
    { name: "Rock", icon: "✊" },
    { name: "Paper", icon: "✋" },
    { name: "Scissors", icon: "✌️" },
  ];

  const theme = useTheme();
  return (
    <>
      <RPSSelectionsDisplay
        userSelectedOption={userSelectedOption}
        computerSelectedOption={computerSelectedOption}
      />
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
                  ? "scale(0.4) translate(-70%, -60%)"
                  : "",
              transition:
                "opacity 0.5s ease, margin 0.5s ease, width 2s ease, transform 1s ease 1s",
            }}
          >
            <RPSSelectionCard
              text={option.icon}
              onClick={
                !userSelectedOption
                  ? () => {
                      setUserSelectedOption(option.name);
                    }
                  : undefined
              }
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
