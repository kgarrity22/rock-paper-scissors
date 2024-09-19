import { Box, SxProps, useTheme } from "@mui/material";

// TODO in main: keep track of wins and losses for user and computer and store in local storage
// Card the user will select in game of rps
export const RPSSelectionCard = ({
  text,
  onClick,
  height = 300,
  width = 200,
  fontSize = 100,
  sx = {},
}: {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  height?: number;
  width?: number;
  fontSize?: number;
  sx?: SxProps;
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: "3px solid",
        borderRadius: theme.shape.borderRadius,
        height,
        width,
        fontSize,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.5s ease, box-shadow 0.5s ease",
        ":hover": onClick
          ? {
              cursor: "pointer",
              transform: "scale(1.1)",
              border: "4px solid",
              boxShadow: "rgba(72, 135, 202, 0.8) 0 0 90px 33px",
            }
          : {},
        ...sx,
      }}
      onClick={onClick}
    >
      {text}
    </Box>
  );
};
