import { QuestionMark } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { RPSSelectionType } from "./types";

export const RPSSelectionsDisplay = ({
  userSelectedOption,
}: {
  userSelectedOption: RPSSelectionType | null;
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{
        width: "100%",
        opacity: userSelectedOption ? 1 : 0,
        transition: "opacity 1s ease 1s",
      }}
    >
      <Typography variant="body1">Your Choice:</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">Computer's Choice:</Typography>
        {/* TODO: replace the question mark with one of the cards */}
        <QuestionMark sx={{ fontSize: 70 }} />
      </Box>
    </Box>
  );
};
