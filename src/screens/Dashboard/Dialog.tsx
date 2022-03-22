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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
          Habit
        </Fab>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a habit</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            fullWidth
            options={habits}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                margin="dense"
                variant="standard"
                {...params}
                label="Habit Name"
              />
            )}
          />
          <TextField
            fullWidth
            margin="dense"
            variant="standard"
            label="Habit Name"
          />
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
