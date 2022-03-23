import { useState, useEffect } from "react";
import { WithProtectedPage, useUser } from "@context/Auth";
import dynamic from "next/dynamic";
import Container from "@mui/material/Container";
import { CardWrapper } from "@components/global/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "./DragList";

const Time = ({ start, reset }) => {
  const [time, setTime] = useState(25 * 60);

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
    <>
      {minutes}:{seconds}
    </>
  );
};

function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <CardWrapper>
          <CardContent>
            <Typography
              sx={{ fontSize: "6rem", textAlign: "center", fontWeight: "bold" }}
              color="text.primary"
            >
              <b>
                <Time />
              </b>
            </Typography>
            <Box display="flex" justifyContent="center">
              <Button variant="contained" color="primary">
                Start
              </Button>
              <Button variant="text" color="primary">
                Reset
              </Button>
            </Box>
          </CardContent>
        </CardWrapper>
      </Container>
      <List />
    </>
  );
}

export default WithProtectedPage(Home, ["admin", "member"]);
