import { Stack } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import TaskContext from "../../store/task-context";
import moment, { Moment } from "moment";
import TasksAccordion from "./TasksAccordion";
import { ITask } from "../../libs/interfaces";

function OtherTasks() {
  const taskCtx = useContext(TaskContext);
  const [data, setData] = useState<ITask[]>([]);
  useEffect(() => {
    if (taskCtx?.taskList) {
      setData(
        taskCtx?.taskList?.filter((item) =>
          moment(item.date).isAfter(moment(), "day")
        )
      );
    }
  }, [taskCtx]);
  const FORMAT = "DD.MM.YYYY";
  const [dates, setDates] = useState<Moment[]>([]);
  useEffect(() => {
    if (data) {
      let arr1 = data.map((item) => moment(item.date).format(FORMAT));
      let arr2 = Array.from(new Set(arr1));
      let arr3 = Array.from(arr2.sort());
      setDates(arr3.map((day) => moment(day, FORMAT)));
    }
  }, [data]);
  return (
    <Stack spacing={3} sx={{ padding: "20px" }}>
      {data &&
        dates?.map((item, i) => (
          <TasksAccordion
            key={i}
            date={moment(item)}
            data={data.filter((task) =>
              moment(task.date).isSame(moment(item), "day")
            )}
          />
        ))}
    </Stack>
  );
}

export default OtherTasks;
