import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { ITask } from "../../libs/interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import InputControl from "../form/InputControl";
import { Check } from "@mui/icons-material";
import DateControl from "../form/DateControl";
import moment from "moment";
import { useContext } from "react";
import TaskContext from "../../store/task-context";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#282828",
  boxShadow: 24,
  p: 1,
  border: "2px solid #999999",
};
interface Props {
  open: boolean;
  handleClose: () => void;
}

function TaskModal({ open, handleClose }: Props) {
  const taskCtx = useContext(TaskContext);
  const schema = yup.object({
    name: yup
      .string()
      .trim()
      .required("Please, enter your task")
      .min(2)
      .max(30),
    desc: yup.string().trim().max(100),
    date: yup.string().default(moment().format()),
  });

  const {
    control,
    handleSubmit,
    reset,
  } = useForm<ITask>({
    resolver: yupResolver(schema, { stripUnknown: true, abortEarly: false }),
  });
  const onSubmit: SubmitHandler<ITask> = (values: ITask) => {
    taskCtx?.onAddTaskHandler(values);
    onCloseHandler();
  };
  function onCloseHandler() {
    reset();
    handleClose();
  }

  return (
    <Modal
      hideBackdrop
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Card sx={{ ...style, width: "350px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              Add Task
            </Typography>
            <Stack spacing={2}>
              <InputControl
                label="Task"
                name="name"
                control={control}
                inputAdornment={<Check fontSize="small" />}
              />
              <DateControl
                type={"date"}
                label="Date"
                name="date"
                control={control}
                minDate={moment()}
              />
              <InputControl
                name="desc"
                label="Description"
                control={control}
                multiline
                rows={2}
              />
            </Stack>
          </CardContent>
          <CardActions sx={{ justifyContent: "end" }}>
            <Button variant="text" type="reset" onClick={onCloseHandler}>
              Close
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </Modal>
  );
}

export default TaskModal;
