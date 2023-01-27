import "./App.css";
import Header from "./components/Layout/Header";
import TodayTasks from "./components/UI/TodayTasks";
import Stack from "@mui/material/Stack";
import { UIContextProvider } from "./store/ui-context";
import OtherTasks from "./components/UI/OtherTasks";
import Body from "./components/Layout/Body";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Layout/Footer";
import TaskProvider from "./store/TaskProvider";
import { Grid } from "@mui/material";

function App() {
  const queryClient = new QueryClient();
  return (
    <UIContextProvider>
      <QueryClientProvider client={queryClient}>
        <TaskProvider>
          <Grid
            container
            justifyContent="center"
            padding={"30px"}
            bgcolor={"#121212"}
          >
            <Stack
              justifyContent={"center"}
              sx={{
                width: "390px",
                height: "844px",
                background: "#222222",
                borderRadius: "20px",
              }}
            >
              <Header />
              <Body>
                <TodayTasks />
                <OtherTasks />
              </Body>
              <Footer />
            </Stack>
          </Grid>
        </TaskProvider>
      </QueryClientProvider>
    </UIContextProvider>
  );
}

export default App;
