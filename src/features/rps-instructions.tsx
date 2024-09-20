import { Typography, useTheme } from "@mui/material";
import { RPSSelectionType } from "./types";

/**
 * Instructions for game play
 * - fade out once a user has started the game
 */
export const RPSInstructions = ({
  userSelectedOption,
}: {
  userSelectedOption: RPSSelectionType | null;
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h3"
      sx={{
        textAlign: "center",
        mb: {
          xs: theme.spacing(4),
          sm: theme.spacing(6),
        },
        fontSize: 18,
        width: userSelectedOption ? 0 : 350,
        height: 0,
        opacity: userSelectedOption ? 0 : 1,
        transition: "opacity 0.5s ease, width 0.5s ease 0.5s",
      }}
    >
      Click on the icon below to make your choice or type "r", "p", or "s" to
      begin
    </Typography>
  );
};
