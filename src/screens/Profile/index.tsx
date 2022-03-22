import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function ProfileCard() {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <TextField
            margin="dense"
            size="small"
            fullWidth
            label="First Name"
            // value={}
            // onChange={}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            margin="dense"
            size="small"
            fullWidth
            label="Last Name"
            // value={}
            // onChange={}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            fullWidth
            label="Email"
            // value={}
            // onChange={}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            fullWidth
            label="Phone Number"
            // value={}
            // onChange={}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            label="Habits forming stage"
            select
            fullWidth
            // value={}
            // onChange={}
          >
            <MenuItem value={"Beginner"}>Beginner</MenuItem>
            <MenuItem value={"Rookie"}>Rookie</MenuItem>
            <MenuItem value={"Amateur"}>Amateur</MenuItem>
            <MenuItem value={"Legend"}>Legend</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            label="Profession"
            select
            fullWidth
            // value={}
            // onChange={}
          >
            <MenuItem value={"student"}>Student</MenuItem>
            <MenuItem value={"teacher"}>Teacher</MenuItem>
            <MenuItem value={"doctor"}>Doctor</MenuItem>
            <MenuItem value={"lawyer"}>Lawyer</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            margin="dense"
            size="small"
            label="Gender"
            select
            fullWidth
            // value={}
            // onChange={}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Femal"}>Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            margin="dense"
            size="small"
            label="Age"
            select
            fullWidth
            // value={}
            // onChange={}
          >
            <MenuItem value={"Fresher"}>16-24</MenuItem>
            <MenuItem value={"Sophomore"}>25-32</MenuItem>
            <MenuItem value={"Pre-Final"}>33-50</MenuItem>
            <MenuItem value={"Final"}>{">50"}</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            label="About"
            fullWidth
            rows={3}
            // value={}
            // onChange={}
            multiline
          />
        </Grid>
      </Grid>
    </Container>
  );
}
