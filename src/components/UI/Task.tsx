import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ITask } from "../../libs/interfaces";
import { useContext } from "react";
import UIContext from "../../store/ui-context";
import useGenerateRandomColor from "../../hooks/useGenerateRandomColor";
import BulletLinePoint from "./BulletLinePoint";
import TaskContext from "../../store/task-context";

interface Props {
  data: ITask;
}
function Task({ data }: Props) {
  const taskCtx = useContext(TaskContext);
  const { color } = useGenerateRandomColor();
  const uiCtx = useContext(UIContext);

  return (
    <Stack direction="row" sx={{ w: "100%" }}>
      <Stack
        direction="row"
        sx={{ width: "100%" }}
        spacing={1}
        alignItems="center"
      >
        <BulletLinePoint color={color} />
        <Stack
          sx={{ width: "100%" }}
          justifyContent={"space-between"}
          alignContent={"center"}
          spacing={0}
        >
          <Typography
            variant={"h2"}
            sx={{
              textDecoration: data.isComplete ? "line-through" : "",
              transition: "300ms ease",
            }}
          >
            {data.name}
          </Typography>
          <Box
            sx={{
              display: data?.desc && uiCtx.isSubtitleVisible ? "" : "none",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "220px",
              color: "secondary.dark",
            }}
          >
            <Typography noWrap variant="caption" sx={{ pr: 1 }}>
              {data.desc}
            </Typography>
          </Box>
        </Stack>
        <Switch
          checked={data.isComplete}
          onChange={() => taskCtx?.onToggleStatusHandler(data)}
        />
      </Stack>
    </Stack>
  );
}

export default Task;
