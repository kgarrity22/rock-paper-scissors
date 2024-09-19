import { Box, Grid2, Typography, useTheme } from "@mui/material";
import { RPSSelectionCard } from "./rps-selection-card";
import { RPSSelectionOption, RPSSelectionType } from "../types";

// Selection screen for the user in game of rps
export const RPSSelection = ({
  userSelection,
  setUserSelection,
}: {
  userSelection: RPSSelectionType | null;
  setUserSelection: (s: RPSSelectionType) => void;
}) => {
  const rpsOptions: RPSSelectionOption[] = [
    { name: "Rock", icon: "✊" },
    { name: "Paper", icon: "✋" },
    { name: "Scissors", icon: "✌️" },
  ];

  const theme = useTheme();
  return (
    <>
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
            mb: theme.spacing(2),
            fontSize: { xs: 80, sm: 100 },
            // opacity: userSelection ? 0 : 1,
            // transition: "opacity 1s ease",
          }}
        >
          Rock, Paper Scissors!
        </Typography>
        <Typography
          sx={{
            typography: { sm: "h3", xs: "h4" },
            mb: {
              xs: theme.spacing(4),
              sm: theme.spacing(6),
            },
            color: "white",
            // opacity: userSelection ? 0 : 1,
            // transition: "opacity 1s ease",
          }}
        >
          Make your choice:
        </Typography>
        <Grid2 container columnSpacing={5} rowSpacing={3}>
          {rpsOptions.map((option: RPSSelectionOption) => (
            <Grid2
              className={userSelection === option.name ? "showcase" : ""}
              size={{ xs: 12, sm: 4 }}
              key={option.name}
              sx={{
                display: "flex",
                justifyContent: "center",
                // opacity:
                //   !userSelection || userSelection === option.name ? 1 : 0,
                // transition: "transform 1s ease, opacity 1s ease",
              }}
            >
              <RPSSelectionCard
                text={option.icon}
                onClick={() => {
                  setUserSelection(option.name);
                }}
                // if the card has been selected,
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

// todo: the effect when one is chosen
