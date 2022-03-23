import React, { useState, useEffect } from "react";
import { WithProtectedPage, useUser } from "@context/Auth";
import dynamic from "next/dynamic";
import Container from "@mui/material/Container";
import { CardWrapper } from "@components/global/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Dialog from "./Dialog";
import { Task } from "@type/Task";

const Drag = dynamic(() => import("./Drag"), { ssr: false });

const Time = ({ totalTime = 0 }: any) => {
  const [time, setTime] = useState(0);

  const startTimer = (newTime: any) => {
    setTime(newTime);
  };

  const resetTime = () => {
    setTime(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "6rem",
          textAlign: "center",
          fontWeight: "bold",
          mb: 2,
        }}
        color="text.primary"
      >
        <b>
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </b>
      </Typography>
      <Box mb={4} display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() => {
            startTimer?.(totalTime);
          }}
          color="primary"
        >
          Start
        </Button>
        <Button
          onClick={() => {
            startTimer(0);
          }}
          variant="text"
          color="primary"
        >
          Reset
        </Button>
      </Box>
      <LinearProgress
        variant="determinate"
        value={((totalTime - time) * 100) / totalTime}
        sx={{ borderRadius: 4 }}
      />
    </Box>
  );
};
const finalSpaceCharacters = [
  {
    title: "Complete Tutorial Sheet",
    time: 1648040387850,
    notes: "",
    id: "0.6152774061016792",
  },
  {
    title: "Get new book",
    time: 1648036689911,
    notes: "",
    id: "0.2692362106688877",
  },
];
function Home() {
  const [totalTime, setTotalTime] = React.useState(25 * 60);
  const [tasks, setTasks] = React.useState<Task[]>(finalSpaceCharacters);
  return (
    <>
      {/* <Typography variant="h4" color="initial">
        <b>Tasks</b>
      </Typography> */}
      <Container maxWidth="md">
        <Time totalTime={30} />
        <CardWrapper>
          <Drag tasks={tasks} />
        </CardWrapper>
      </Container>
      <Dialog setTasks={setTasks} />
    </>
  );
}

export default Home;
