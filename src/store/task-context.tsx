import React from "react";
import { ITask } from "../libs/interfaces";

interface ITaskContext {
  taskList: ITask[];
  onAddTaskHandler: (values: ITask) => void;
  onToggleStatusHandler: (value: ITask) => void;
}
const TaskContext = React.createContext<ITaskContext | null>(null);

export default TaskContext;
