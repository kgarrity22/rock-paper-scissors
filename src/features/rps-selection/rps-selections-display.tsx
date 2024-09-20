import { QuestionMark } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { RPSSelectionType } from "../types";
import { RPSSelectionCard } from "./rps-selection-card";
import { rpsOptions } from "../contstants";

/**
 * Displays the selections made by both the user and the computer
 */
export const RPSSelectionsDisplay = ({
  userSelectedOption,
  computerSelectedOption,
}: {
  userSelectedOption: RPSSelectionType | null;
  computerSelectedOption: RPSSelectionType | null;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        opacity: userSelectedOption ? 1 : 0,
        transition: "opacity 1s ease 1s",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1">Your Choice:</Typography>
        <Typography variant="body1" sx={{ mr: "-30px" }}>
          Computer's Choice:
        </Typography>
      </Box>
      <Box position="relative">
        <Box
          sx={{
            position: "absolute",
            right: 0,
            mt: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QuestionMark
            sx={{
              width: computerSelectedOption ? 0 : 80,
              height: computerSelectedOption ? 0 : 120,
              opacity: computerSelectedOption ? 0 : 1,
              transition:
                "opacity 1s ease 5s, height 1s ease 5.5s, width 1s ease 5.5s",
            }}
          />
          <Box
            sx={{
              width: computerSelectedOption ? "100%" : 0,
              height: computerSelectedOption ? "100%" : 0,
              opacity: computerSelectedOption ? 1 : 0,
              transition: "opacity 1s ease 6.5s",
            }}
          >
            <RPSSelectionCard
              text={
                rpsOptions.find((el) => el.name === computerSelectedOption)
                  ?.icon ?? ""
              }
              height={120}
              width={80}
              fontSize={50}
              sx={{ borderRadius: "15px", border: "1px solid" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
