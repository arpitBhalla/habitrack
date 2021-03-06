import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }: any) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

export default function PersistentDrawerRight({
  setOpen,
  open,
}: {
  opne: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}) {
  const theme = useTheme();

  const router = useRouter();

  const handleDrawerClose = () => {};

  return (
    <Box>
      <Box
        display="flex"
        pl={2}
        pr={2}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Typography variant="h5" color="textSecondary">
          <b>{open}</b>
        </Typography>
        <IconButton aria-label="close drawer" onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Grid sx={{ p: 2 }} container spacing={2}>
        <Grid item xs={12}>
          <Card title={"0 day"} caption={"Current Streak"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card title={"0 day"} caption={"Complete"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card title={"0 day"} caption={"Failed"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card title={"0 day"} caption={"Skipped"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card title={"0 day"} caption={"Total"} />
        </Grid>
      </Grid>
    </Box>
  );
}

const Card = ({ children, title, caption }: any) => {
  return (
    <Box sx={{ border: "1px solid #ccc", p: 1, pl: 2, borderRadius: 1 }}>
      <Typography
        variant="caption"
        sx={{ textTransform: "uppercase" }}
        color="text.secondary"
      >
        <b>{caption}</b>
      </Typography>
      <Typography variant="body1" color="text.primary">
        <b>{title}</b>
      </Typography>
      {children}
    </Box>
  );
};
