import {
  IconButton,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import useNews from "../../hooks/useNews";
import Marquee from "react-fast-marquee";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import TaskModal from "../UI/TaskModal";
function Footer() {
  const { data: news, isLoading } = useNews();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        padding: "20px",
      }}
      alignContent={"center"}
    >
      <TaskModal open={open} handleClose={handleClose} />
      {isLoading ? (
        <Skeleton
          width={"100%"}
          sx={{ bgcolor: "secondary.dark" }}
        />
      ) : (
        <Marquee gradientColor={[34, 34, 34]} gradientWidth={10}>
          <Typography
            variant="caption"
            sx={{ pr: 1 }}
          >{`${news?.setup} ${news?.punchline}`}</Typography>
        </Marquee>
      )}
      <Tooltip title="Add Task">
        <IconButton onClick={handleOpen} aria-haspopup="true">
          <AddCircleIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default Footer;
