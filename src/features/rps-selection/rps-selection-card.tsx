import { Box, useTheme } from "@mui/material";

// TODO in main: keep track of wins and losses for user and computer and store in local storage
// Card the user will select in game of rps
export const RPSSelectionCard = ({
  text,
  onClick,
}: {
  text: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: "3px solid",
        borderRadius: theme.shape.borderRadius,
        height: 300,
        width: 200,
        fontSize: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.5s ease, box-shadow 0.5s ease",
        ":hover": {
          cursor: "pointer",
          transform: "scale(1.1)",
          border: "4px solid",
          boxShadow: "rgba(72, 135, 202, 0.8) 0 0 90px 33px",
        },
      }}
      onClick={onClick}
    >
      {text}
    </Box>
  );
};
