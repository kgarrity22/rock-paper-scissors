export type RPSSelectionType = "Rock" | "Paper" | "Scissors";

export type RPSSelectionOption = {
  name: RPSSelectionType;
  icon: string;
};

export type RPSGameHistoryType = {
  wins: number;
  ties: number;
  losses: number;
};

export type FistDirectionType = "left" | "right";
