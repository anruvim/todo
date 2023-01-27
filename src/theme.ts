import { createTheme } from "@mui/material/styles";
const PRIMARY_MAIN = "#ffffff";
const SECONDARY_MAIN = "#A9A9A9";
const SECONDARY_DARK = "#999999";
const SUCCESS_MAIN = "#10C200";
const INFO_MAIN = "#3469f4";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: PRIMARY_MAIN,
    },
    secondary: {
      main: SECONDARY_MAIN,
      dark: SECONDARY_DARK,
    },
    success: { main: SUCCESS_MAIN },
    info: { main: INFO_MAIN },
  },
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontFamily: "Actor",
      fontStyle: "",
      fontSize: 36,
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: "500",
    },
    caption: {
      fontFamily: "Actor",
      color: SECONDARY_DARK,
      fontSize: 14,
      fontWeight: "600",
    },
  },
  components: {
    MuiButton: {},
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: "Actor",
          color: PRIMARY_MAIN,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          color: PRIMARY_MAIN,
          backgroundColor: "#282828",
          borderRadius: "25px",
          boxShadow: "-8px -8px 20px #ffffff0d, 16px 16px 20px #00000026",
          padding: "17px",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "50.71px",
          height: "29.92px",
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: "2.49px",
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: "#primary",
              "& + .MuiSwitch-track": {
                boxShadow: "inset 0px 0px 10px 3px #00000040",
                backgroundColor: SUCCESS_MAIN,
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
              "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="15" viewBox="0 0 15 12"><path fill="${encodeURIComponent(
                  SECONDARY_MAIN
                )}" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z"/></svg>')`,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: SUCCESS_MAIN,
              border: "6px solid #primary",
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.7,
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: "25.77px",
            height: "24.94px",
            "&:before": {
              content: "''",
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "1px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 14 14"><path fill="${encodeURIComponent(
                SECONDARY_MAIN
              )}" d="M11.8976 13.1218L6.61086 7.82669L1.32411 13.1218L0.143738 11.9414L5.4388 6.65462L0.143738 1.36787L1.32411 0.1875L6.61086 5.48256L11.8976 0.195813L13.0697 1.36787L7.78293 6.65462L13.0697 11.9414L11.8976 13.1218Z" /></svg>')`,
            },
          },
          "& .MuiSwitch-track": {
            boxShadow: "inset 0px 0px 10px 3px #00000040",
            borderRadius: 20,
            backgroundColor: INFO_MAIN,
            opacity: 1,
          },
        },
      },
    },
  },
});

export default theme;
