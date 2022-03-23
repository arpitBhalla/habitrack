import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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
        <Button fullWidth size="small" variant="outlined" color="primary">
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
