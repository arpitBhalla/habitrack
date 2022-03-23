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
import { HabitType } from "@type/Habit";
import Skeleton from "@mui/material/Skeleton";

export default function ActionAreaCard() {
  return (
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
        <b>Habits are like dominos. As one is formed, all others will follow</b>
      </Typography>
    </Grid>
  );
}
