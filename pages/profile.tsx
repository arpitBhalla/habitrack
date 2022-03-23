import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { WithProtectedPage } from "@context/Auth";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
import Logo from "@components/global/Logo";

const Profile = dynamic(() => import("@screens/Profile"));

const Home: NextPage = () => {
  return (
    <Container>
      <Grid container spacing={0} alignItems="center">
        <Grid item lg={3} md={2} sm={false}></Grid>
        <Grid item md={5} xs={12}>
          <Box
            p={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems="center"
            justifyItems={"center"}
            sx={{
              boxShadow: `rgba(17, 12, 46, 0.15) 0px 48px 100px 0px`,
            }}
          >
            <Profile />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithProtectedPage(Home, ["admin", "member"]);
