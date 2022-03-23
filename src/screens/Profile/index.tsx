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
import { supabase } from "@utils/supabaseClient";
import { useUser } from "@context/Auth";

export default function ProfileCard() {
  const { authUser } = useUser();
  const [name, setName] = React.useState(authUser?.user_metadata.name);
  const [email, setEmail] = React.useState(authUser?.email);

  const [profession, setProfession] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");

  async function submitForm() {
    return console.log({ name, email, profession, gender, age });

    const { user, error } = await supabase.auth.signIn({
      email: "example@email.com",
    });
  }
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <TextField
            margin="dense"
            size="small"
            fullWidth
            label="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            size="small"
            label="Profession"
            select
            fullWidth
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
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
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            margin="dense"
            size="small"
            label="Age"
            select
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <MenuItem value={"16-24"}>16-24</MenuItem>
            <MenuItem value={"25-32"}>25-32</MenuItem>
            <MenuItem value={"33-50"}>33-50</MenuItem>
            <MenuItem value={">50"}>{">50"}</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ mt: 2, mb: 2 }}
            fullWidth
            onClick={submitForm}
            size={"small"}
            variant="contained"
            color="primary"
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
