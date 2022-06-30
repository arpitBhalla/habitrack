import React, { useState, useEffect } from "react";
import {
  WithProtectedPage,
  useUser,
} from "@arpitbhalla/habitrack/context/Auth";
import dynamic from "next/dynamic";
import Container from "@mui/material/Container";
import { CardWrapper } from "@arpitbhalla/habitrack/components/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "./DragList";
import Dialog from "./Dialog";
import { Task, TaskList, TaskType } from "@arpitbhalla/habitrack/types";

function Home() {
  const [tasks, setTasks] = useState<TaskList>(DEFAULT_TASKS);
  const addToTaskList = React.useCallback((list: TaskType, task: Task) => {
    setTasks((tasks) => {
      const newTasks = { ...tasks };
      newTasks[list] = [...tasks[list], task];
      return newTasks;
    });
  }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" color="initial">
          <b>Tasks</b>
        </Typography>
        <List {...{ tasks, setTasks }} />
      </Container>
      <Dialog addToTaskList={addToTaskList} />
    </>
  );
}

export default Home;

const DEFAULT_TASKS: TaskList = {
  "not important": [
    {
      id: "item-452",
      prefix: "not important",
      content: "item 452",
      title: "Some task",
    },
  ],
  "urgent & important": [
    {
      id: "item-119",
      prefix: "urgent & important",
      content: "item 119",
      title: "Important Task Name",
    },
  ],
  "not important not urgent": [
    {
      id: "item-876",
      prefix: "not important not urgent",
      content: "item 876",
      title: "Task Name",
    },
  ],
  "important not urgent": [
    {
      id: "item-528",
      prefix: "important not urgent",
      content: "item 528",
      title: "Task Name",
    },
  ],
};
