import { Box, Grid2, Typography, useTheme } from "@mui/material";
import { RPSSelectionCard } from "./rps-selection-card";
import { useState } from "react";

type RPSSelection = "Rock" | "Paper" | "Scissors";
type RPSSelectionOption = {
  name: RPSSelection;
  icon: string;
};

// Selection screen for the user in game of rps
export const RPSSelection = () => {
  const rpsOptions: RPSSelectionOption[] = [
    { name: "Rock", icon: "✊" },
    { name: "Paper", icon: "✋" },
    { name: "Scissors", icon: "✌️" },
  ];
  const [userSelectedOption, setUserSelectedOption] =
    useState<RPSSelection | null>(null);

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
          }}
        >
          Make your choice:
        </Typography>
        <Grid2 container columnSpacing={5} rowSpacing={3}>
          {rpsOptions.map((option) => (
            <Grid2
              size={{ xs: 12, sm: 4 }}
              key={option.name}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <RPSSelectionCard
                text={option.icon}
                onClick={() => {
                  setUserSelectedOption(option.name);
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

// todo: the effect when one is chosen
