import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Task } from "@arpitbhalla/habitrack/types";

export default function FormDialog({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [time, setTime] = React.useState<Date | null>(new Date());
  const [notes, setNotes] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    setTasks((tasks) => [
      ...tasks,
      { title, time: time?.getTime(), notes, id: Math.random().toString() },
    ]);
    setTitle("");
    setTime(new Date());
    setNotes("");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ position: "fixed", bottom: 18, right: 18 }}>
        <Fab
          onClick={handleClickOpen}
          variant="extended"
          color="primary"
          size="medium"
        >
          <AddIcon sx={{ mr: 1 }} />
          Task
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a task</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Grid container spacing={1}>
            <Grid xs={9} item>
              <TextField
                margin="dense"
                variant="outlined"
                label="Task Name"
                size="small"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid xs={3} item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Task deadline"
                  value={time}
                  onChange={(time) => {
                    setTime(time);
                  }}
                  renderInput={(params) => (
                    <TextField
                      variant="outlined"
                      margin="dense"
                      fullWidth
                      size="small"
                      {...params}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid xs={12} item>
              <TextField
                fullWidth
                label="Notes"
                margin="dense"
                size="small"
                variant="outlined"
                multiline
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
