import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import {
  Card,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import moment, { Moment } from "moment";
import { ITask } from "../../libs/interfaces";
import Task from "./Task";
import { useState } from "react";
import BulletLinePoint from "./BulletLinePoint";

interface Props {
  date: Moment;
  data: ITask[];
}
function TasksAccordion({ date, data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <Stack direction="row" sx={{ w: "100%" }}>
        <Stack
          direction="row"
          sx={{ width: "100%", pr: "10px" }}
          spacing={1}
          alignItems="center"
        >
          <BulletLinePoint />
          <Stack
            sx={{ width: "100%" }}
            justifyContent={"space-between"}
            alignContent={"center"}
            spacing={0}
          >
            <Typography variant={"h2"}>
              {date.isSame(moment().add(1, "day"), "day")
                ? "Tomorrow"
                : date.format("DD/MM")}{" "}
              Tasks
            </Typography>
          </Stack>
          <IconButton
            aria-label="toggle"
            size="small"
            onClick={() => setIsOpen(!isOpen)}
            sx={{
              transition: "300ms ease",
              transform: !isOpen ? "rotate(-90deg)" : "",
            }}
          >
            <ExpandCircleDownIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Collapse in={isOpen}>
        <Stack spacing={1}>
          <Divider sx={{ backgroundColor: "secondary.dark", mt: 2 }} />
          {data.map((item, index) => (
            <Task key={index} data={item} />
          ))}
        </Stack>
      </Collapse>
    </Card>
  );
}

export default TasksAccordion;
