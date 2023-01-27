import { ITask } from "../libs/interfaces";
import TaskContext from "./task-context";
import { useReducer } from "react";
import { faker } from "@faker-js/faker";
import { makeData } from "../libs/makeData";
import moment from "moment";

interface TaskAction {
  type: "ADD" | "SET";
  item: ITask;
}
interface TaskState {
  taskList: ITask[];
}
const defaultState = {
  taskList: makeData(5),
};
const taskReducer = (state: TaskState, action: TaskAction) => {
  if (action.type === "ADD") {
    const updateList = state.taskList.concat({
      date: moment(action.item.date),
      name: action.item.name,
      desc: action.item.desc,
      isComplete: false,
      id: faker.datatype.uuid(),
    });
    return { taskList: updateList };
  } else if (action.type === "SET") {
    var updateList = state.taskList;
    const index = updateList.findIndex((object) => {
      return object.id === action.item.id;
    });
    if (index !== -1) {
      updateList[index].isComplete = !action.item.isComplete;
    }
    return { taskList: updateList };
  }
  return defaultState;
};

const TaskProvider = (props: { children: JSX.Element | JSX.Element[] }) => {
  const [taskState, dispatchTaskAction] = useReducer(taskReducer, defaultState);

  function onAddTaskHandler(values: ITask) {
    dispatchTaskAction({ type: "ADD", item: values });
  }

  function onToggleStatusHandler(item: ITask) {
    dispatchTaskAction({ type: "SET", item: item });
  }

  return (
    <TaskContext.Provider
      value={{
        taskList: taskState.taskList,
        onAddTaskHandler: onAddTaskHandler,
        onToggleStatusHandler: onToggleStatusHandler,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
