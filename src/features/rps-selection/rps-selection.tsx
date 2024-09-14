import { Box, Grid2, Typography } from "@mui/material";
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
  return (
    <Box>
      <Typography variant="h3">Make your choice:</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Grid2 container columnSpacing={5} rowSpacing={3}>
          {rpsOptions.map((option) => (
            <Grid2 size={{ xs: 12, sm: 4 }} key={option.name}>
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
    </Box>
  );
};

// todo: the effect when one is chosen
