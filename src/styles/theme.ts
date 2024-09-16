import { ThemeOptions, createTheme } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    // primary: {
    //   main: "#192a3e",
    //   light: "#9bb7da",
    // },
    // secondary: {
    //   main: "#a90ea5",
    //   light: "#ffdcfe26",
    // },
    // info: {
    //   main: "#7695d7",
    //   light: "#f4f8ff",
    //   dark: "#004FC4",
    // },
    // warning: {
    //   main: "#ffb427",
    //   dark: "#E57A00",
    // },
    // error: {
    //   main: "#ff372e",
    //   light: "#ff6666",
    //   dark: "#E53535",
    // },
    // success: {
    //   main: "#38983d",
    //   dark: "#05A660",
    // },
    // background: {
    //   default: "#fff",
    //   paper: "#fff",
    // },
  },
  spacing: 8,
  //   borderRadius: 45,
  shape: {
    borderRadius: 6,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 720,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontFamily: "Lilita One",
      fontWeight: 200,
    },
    h2: {
      fontFamily: "Nunito",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Nunito",
    },
    h4: {
      fontFamily: "Manrope",
      fontWeight: 200,
    },
    h5: {
      fontFamily: "Manrope",
    },
    h6: {
      fontFamily: "Nunito",
    },
    body1: {
      fontFamily: "Manrope",
      fontSize: 16,
    },
    caption: {
      fontWeight: 700,
      fontFamily: "Manrope",
      fontSize: 14,
      color: "black",
    },
    button: {
      fontFamily: "Manrope",
      fontSize: 16,
      fontWeight: 200,
      textTransform: "none",
    },
    body2: {
      fontFamily: "Nunito",
      fontSize: 12,
    },
    fontFamily: "Nunito",
  },
};

export const theme = createTheme(themeOptions);
