import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Task from "./Task";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState, useContext, useEffect } from "react";
import TaskContext from "../../store/task-context";
import moment from "moment";
import { ITask } from "../../libs/interfaces";

function TodayTasks() {
  const taskCtx = useContext(TaskContext);
  const [data, setData] = useState<ITask[]>([]);
  useEffect(() => {
    if (taskCtx?.taskList) {
      setData(
        taskCtx?.taskList?.filter((item) =>
          moment(item.date).isSame(moment(), "day")
        )
      );
    }
  }, [taskCtx]);
  return (
    <Stack spacing={2} sx={{ paddingX: "20px" }}>
      <Stack
        spacing={1}
        direction={"row"}
        alignItems="center"
        sx={{ color: "primary.main", paddingX: "16px" }}
      >
        <CheckBoxIcon />
        <Typography variant="h2">Today Tasks:</Typography>
      </Stack>
      <Card>
        <Stack spacing={1}>
          {data && data.length > 0 ? (
            data.map((item, index) => <Task key={index} data={item} />)
          ) : (
            <Typography variant="caption">
              To tasks today. Reload to update tasks.
            </Typography>
          )}
        </Stack>
      </Card>
    </Stack>
  );
}

export default TodayTasks;
