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

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h4" color="initial">
          <b>Tasks</b>
        </Typography>
        <List />
      </Container>
    </>
  );
}

export default Home;
