import { Box } from "@mui/material";

function Body({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        overflowY: "scroll",
        "::-webkit-scrollbar": {
          display: "none",
        },
        paddingBottom: "20px",
      }}
    >
      {children}
    </Box>
  );
}

export default Body;
