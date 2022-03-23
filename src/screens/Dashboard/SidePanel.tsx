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
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";

import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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

const data = [
  { name: "M", avg: 3 },
  { name: "T", avg: 2 },
  { name: "W", avg: 3 },
  { name: "T", avg: 4 },
  { name: "F", avg: 5 },
  { name: "S", avg: 3 },
  { name: "S", avg: 2 },
];

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
  open,
  setOpen,
  children,
}: {
  open: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}) {
  const theme = useTheme();

  const router = useRouter();
  const d = (id?: string) => {
    router.query.info = ["3", id || ""];
    router.push(router);
  };

  const handleDrawerClose = () => {
    setOpen("");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Main open={Boolean(open)}>{children}</Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          zIndex: theme.zIndex.appBar - 1,
        }}
        variant="persistent"
        anchor="right"
        open={!!open}
      >
        <Toolbar />
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
            <Card
              title={"0 day"}
              caption={"Current Streak"}
              Icon={WhatshotOutlinedIcon}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              title={"0 day"}
              caption={"Complete"}
              Icon={DoneOutlinedIcon}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card title={"0 day"} caption={"Failed"} Icon={CloseIcon} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card title={"0 day"} caption={"Skipped"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card title={"0 day"} caption={"Total"} />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                // openTo="year"
                // value={value}
                onChange={(newValue) => {
                  // setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <BarChart width={280} height={180} data={data}>
              <Bar dataKey="avg" fill={theme.palette.primary.main} />
              <Tooltip />
              <XAxis dataKey="name" />
              <YAxis />
              <Legend key="avg" />
            </BarChart>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}

const Card = ({ children, title, caption, Icon }: any) => {
  return (
    <Box sx={{ border: "1px solid #ccc", p: 1, pl: 2, borderRadius: 1 }}>
      <Typography
        variant="caption"
        sx={{
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
        }}
        color="text.secondary"
      >
        {Icon && <Icon sx={{ fontSize: "18px" }} color="action" />}
        <b>{caption}</b>
      </Typography>
      <Typography sx={{ pl: "4px" }} variant="body1" color="text.primary">
        <b>{title}</b>
      </Typography>
      {children}
    </Box>
  );
};
