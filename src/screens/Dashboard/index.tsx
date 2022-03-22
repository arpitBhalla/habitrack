import * as React from "react";
import Card from "@components/global/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Dialog from "./Dialog";
import Table from "./Table";
import PanelBody from "./SidePanel";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

export default function ActionAreaCard() {
  const [open, setOpen] = React.useState("");

  return (
    <Container maxWidth="xl">
      <PanelBody open={open} setOpen={setOpen}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Card
              title="Day Streak"
              number={"5 days"}
              description={"You've been working hard today!"}
              Icon={WhatshotOutlinedIcon}
              color="#F76707"
            />
          </Grid>
          <Grid item md={4}>
            <Card
              title="Points"
              number={1040}
              description={"Rank 34 among 89 users"}
              Icon={ControlPointDuplicateIcon}
              color="#1C7ED6"
            />
          </Grid>
          <Grid item md={4}>
            <Card
              title="Level"
              number={"Noob"}
              description={"You've been working hard today!"}
              Icon={WorkspacePremiumOutlinedIcon}
              color="#F03E3E"
            />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 2 }} container spacing={3}>
          <Grid item md={8}>
            <Table
              onClick={(rowName: string) => {
                setOpen(rowName);
              }}
            />
          </Grid>
          <Grid item md={4}>
            Graph
          </Grid>
        </Grid>
      </PanelBody>
      <Dialog />
    </Container>
  );
}
