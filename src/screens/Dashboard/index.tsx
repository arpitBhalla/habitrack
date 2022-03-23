import * as React from "react";
import Card, { CardWrapper } from "@components/global/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "./Dialog";
import Table from "./Table";
import PanelBody from "./SidePanel";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import dynamic from "next/dynamic";
import { useUser } from "@context/Auth";
import { supabase } from "@utils/supabaseClient";
import Stats from "./Stats";

const Chart = dynamic(() => import("./chart"), {
  ssr: false,
});
export default function ActionAreaCard() {
  const [open, setOpen] = React.useState("");
  const { authUser } = useUser();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" color="initial">
        <b>Good Morning, {authUser?.user_metadata?.full_name || "Your Name"}</b>
      </Typography>
      <Typography sx={{ p: 1 }} variant="body1" color="text.secondary">
        <b>6hr 12 min till bedtime</b>
      </Typography>
      <PanelBody open={open} setOpen={setOpen}>
        <Stats />
        <Grid sx={{ mt: 2 }} container spacing={3}>
          <Grid item md={8}>
            <Typography variant="h6" color="text.secondary">
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>

              <IconButton>
                <ChevronRightIcon />
              </IconButton>

              <b>Mon, 21/3 - Sun, 26/3</b>
            </Typography>
            <LinearProgress
              sx={{ height: 8, m: 1, borderRadius: 8 }}
              variant="determinate"
              value={45}
            />
            <Box
              sx={{ display: "flex", m: 1, justifyContent: "space-between" }}
            >
              <Typography variant="caption" color="text.secondary">
                <b>33% since last week</b>
              </Typography>
              <Typography variant="caption" color="text.secondary">
                <b>45% achieved</b>
              </Typography>
            </Box>
            <Table
              onClick={(rowName: string) => {
                setOpen(rowName);
              }}
            />
          </Grid>
          <Grid item md={4}>
            <CardWrapper>
              {/* <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
                <b>Progress</b>
              </Typography> */}

              <Box p={2}>
                <Chart />
              </Box>
            </CardWrapper>
          </Grid>
        </Grid>
      </PanelBody>
      <Dialog />
    </Container>
  );
}
