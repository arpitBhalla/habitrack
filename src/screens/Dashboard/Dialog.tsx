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
import { habit } from "@type/Habit";

export default function FormDialog({
  setHabits,
}: {
  setHabits: (newHabit: habit) => any;
}) {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [remainder, setRemainder] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setHabits({ name, actions: {} });
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ position: "fixed", bottom: 18, right: 18, zIndex: 1000 }}>
        <Fab
          onClick={handleClickOpen}
          variant="extended"
          color="primary"
          size="medium"
        >
          <AddIcon sx={{ mr: 1 }} />
          Habit
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a habit</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                fullWidth
                options={habits}
                value={name}
                onChange={(event: any, newValue: string | null) => {
                  if (newValue) setName(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    margin="dense"
                    variant="outlined"
                    {...params}
                    label="Habit Name"
                    size="small"
                  />
                )}
              />
            </Grid>
            <Grid xs={2} item>
              <TextField
                fullWidth
                type={"number"}
                margin="dense"
                size="small"
                variant="outlined"
                label="Goal"
                value={1}
              />
            </Grid>
            <Grid xs={3} item>
              <TextField
                fullWidth
                select
                margin="dense"
                size="small"
                variant="outlined"
                label="Goal Quantity"
                value="times"
              >
                <MenuItem value="times">times</MenuItem>
                <MenuItem>minutes</MenuItem>
              </TextField>
            </Grid>
            <Grid xs={3} item>
              <TextField
                fullWidth
                select
                margin="dense"
                size="small"
                variant="outlined"
                label="Interval"
                value="Per Day"
              >
                <MenuItem value="Per Day">Per Day</MenuItem>
                <MenuItem>Per Week</MenuItem>
                <MenuItem>Per Month</MenuItem>
              </TextField>
            </Grid>
            <Grid xs={4} item>
              <TextField
                fullWidth
                select
                margin="dense"
                size="small"
                variant="outlined"
                label="Repeat"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem>Weekly</MenuItem>
                <MenuItem>Monthly</MenuItem>
                <MenuItem>Yearly</MenuItem>
              </TextField>
            </Grid>
            <Grid xs={7} item>
              <TextField
                fullWidth
                select
                margin="dense"
                size="small"
                variant="outlined"
                label="Time of day"
              >
                <MenuItem value="daily">Morning</MenuItem>
                <MenuItem>Afternoon</MenuItem>
                <MenuItem>Evening</MenuItem>
                <MenuItem>Night</MenuItem>
              </TextField>
            </Grid>
            <Grid xs={5} item>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  label="Time of day"
                  // value={value}
                  onChange={() => {}}
                  renderInput={(params) => (
                    <TextField
                      variant="outlined"
                      margin="dense"
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
                label="Remainder"
                margin="dense"
                size="small"
                variant="outlined"
                multiline
                rows={2}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const habits = [
  "Meditate",
  "Set a To-do List",
  "Drink Water",
  "Read Books",
  "Running",
  "Stay Fit with Exercises",
  "Quick Stretch",
  "Hit the Gym",
  "Swimming",
  "Core Training",
  "Practice Yoga",
  "HIIT Cardio",
  "Cycling",
  "Stay Healthy",
  "Go for a Walk",
  "Get Good Sleep",
  "Take a Cold Shower",
  "Take Power Naps",
  "Wash Your Hands",
  "Apply Sunscreen",
  "Take a Deep Breath",
  "Wear a Mask",
  "Increase Your Productivity",
  "Read an Article",
  "Review Your Day",
  "Clean Up Emails",
  "Write in Journal",
  "Nurture Your Relationships",
  "Call My Parents",
  "Spend Time with Family",
  "Pay a Compliment",
  "Meet a Friend",
  "Say Thank You",
  "Spend Time with Yourself",
  "Watch Your Diet",
  "Take Vitamins",
  "Eat Fruits",
  "Limit Sugar",
  "Track Calories",
  "Limit Caffeine",
  "Learn Something New",
  "Learn Spanish",
  "Learn French",
  "Learn German",
  "Learn Japanese",
  "Practice Coding",
  "Try a New Recipe",
  "Live a Passion",
  "Play the Guitar",
  "Take a Photo",
  "Paint &amp; Draw",
  "Just Dance",
  "Play Badminton",
  "Practice for Baseball",
  "Go Bowling",
  "Practice Boxing",
  "Go Fishing",
  "Play Golf",
  "Go Climbing",
  "Count Your Steps",
  "Jump Rope!",
  "Treadmill Running",
  "Lift Weight",
  "Climb Those Stairs",
  "Stay in Movements",
  "Exercise Time",
  "Burn some Calories",
  "Go Kayaking",
  "Go Rowing",
  "Take Vitamin A",
  "Take Vitamin C",
  "Take Vitamin B6",
  "Take Vitamin E",
  "Niacin Intake",
  "Biotin Intake",
  "Calcium Intake",
  "Sodium Intake",
  "Fat Intake",
  "Protein Intake",
  "Cholesterol Intake",
];
