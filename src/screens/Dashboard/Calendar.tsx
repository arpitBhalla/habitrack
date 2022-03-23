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

export default function PersistentDrawerRight({}: {
  open: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}) {
  const [date, setDate] = React.useState(new Date());

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Button fullWidth size="small" variant="contained" color="primary">
          Mark as done
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button fullWidth size="small" variant="text" color="primary">
          Skip for today
        </Button>
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date}
            onChange={(newValue) => {
              if (newValue) setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </>
  );
}
