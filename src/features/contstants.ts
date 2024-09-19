import { RPSSelectionOption, RPSSelectionType } from "./types";

export const rpsOptions: RPSSelectionOption[] = [
  { name: "Rock", icon: "✊" },
  { name: "Paper", icon: "✋" },
  { name: "Scissors", icon: "✌️" },
];

export const computerChoices: RPSSelectionType[] = rpsOptions.map(
  (o) => o.name
);

export const countdownTextArray = [...computerChoices, "Shoot"];
