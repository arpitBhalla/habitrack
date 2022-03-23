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
import Image from "next/image";
import { useUser } from "@context/Auth";
import { supabase } from "@utils/supabaseClient";
import Stats from "./Stats";
import { habit } from "@type/Habit";
import Skeleton from "@mui/material/Skeleton";

const Chart = dynamic(() => import("./chart"), {
  ssr: false,
});

function getGreeting() {
  const hour = new Date().getHours();
  return (
    "Good " +
    ((hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening")
  );
}

export default function ActionAreaCard() {
  const [open, setOpen] = React.useState("");
  const [habits, setHabits] = React.useState<habit[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { authUser } = useUser();

  const saveHabit = async (newHabit: habit) => {
    setHabits((oldHabits) => [...oldHabits, newHabit]);
    const { data, error } = await supabase
      .from("userProfiles")
      .update({ habits: JSON.stringify([...habits, newHabit]) })
      .match({ id: authUser?.id });
  };

  const fetchHabits = async () => {
    const { data, error } = await supabase
      .from("userProfiles")
      .select()
      .eq("id", authUser?.id);
    if (data) {
      const habits = JSON.parse(data[0].habits) as habit[];
      setHabits(habits);
      console.log(habits);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    fetchHabits();
  }, []);

  if (loading)
    return (
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={12}>
            <Skeleton variant="rectangular" height={30} width={"30%"} />
          </Grid>
          <Grid item md={4}>
            <Skeleton variant="rectangular" height={180} />
          </Grid>
          <Grid item md={4}>
            <Skeleton variant="rectangular" height={180} />
          </Grid>
          <Grid item md={4}>
            <Skeleton variant="rectangular" height={180} />
          </Grid>
          <Grid item md={8}>
            <Skeleton variant="rectangular" height={40} />
            <br />
            <Skeleton variant="rectangular" height={180} />
          </Grid>
          <Grid item md={4}>
            <Skeleton variant="rectangular" height={220} />
          </Grid>
        </Grid>
      </Container>
    );
  if (habits.length === 0)
    return (
      <Container maxWidth="xl">
        <Grid
          container
          spacing={1}
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          sx={{ pb: 5 }}
        >
          {/* <Typography variant="h6" color="initial">
          <b>
            Hey {authUser?.user_metadata?.full_name || "~"}, Let's start by
            adding a habit
          </b>
        </Typography> */}
          <img src="/images/empty-1.svg" width={280} height={80} />
          <img src="/images/empty-2.svg" width={280} height={80} />
          <img src="/images/empty-3.svg" width={280} height={80} />
          <Typography sx={{ m: 2 }} variant="body1" color="initial">
            <b>The start of Better You!</b>
          </Typography>
          <Typography
            sx={{ width: 260, textAlign: "center" }}
            variant="caption"
            color="text.secondary"
          >
            <b>
              Habits are like dominos. As one is formed, all others will follow
            </b>
          </Typography>
        </Grid>
        <Dialog setHabits={saveHabit} />
      </Container>
    );
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" color="initial">
        <b>
          {getGreeting()}, {authUser?.user_metadata?.full_name || "Your Name"}
        </b>
      </Typography>
      <Typography sx={{ p: 1 }} variant="body1" color="text.secondary">
        <b>6hr 12 min till bedtime</b>
      </Typography>
      <PanelBody open={open} setOpen={setOpen}>
        <Stats />
        <Grid sx={{ mt: 2 }} container spacing={3}>
          <Grid item sm={8}>
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
              habits={habits}
              onClick={(rowName: string) => {
                setOpen(rowName);
              }}
            />
          </Grid>
          <Grid item sm={4}>
            <CardWrapper>
              <Typography sx={{ m: 2 }} variant="body2" color="text.secondary">
                <b>Progress</b>
              </Typography>

              <Box p={2}>
                <Chart />
              </Box>
            </CardWrapper>
          </Grid>
        </Grid>
      </PanelBody>
      <Dialog setHabits={saveHabit} />
    </Container>
  );
}
