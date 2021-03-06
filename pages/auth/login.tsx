import type { NextPage } from "next";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { supabase } from "@arpitbhalla/habitrack/utils/supabaseClient";
import { WithProtectedPage } from "@arpitbhalla/habitrack/context/Auth";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
import Logo from "@arpitbhalla/habitrack/src/components";

const Profile = dynamic(() => import("@screens/Profile"));

const Login: NextPage = () => {
  const handleLogin = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "google",
    });
  };
  const theme = useTheme();
  return (
    <Container>
      <Toolbar></Toolbar>
      <Grid container spacing={0} alignItems="center">
        <Grid item lg={6} md={2} sm={false}>
          <Image
            src="/images/illustration_login.png"
            width={500}
            height={400}
          />
        </Grid>
        <Grid item md={5} xs={12}>
          <Box
            p={4}
            display={"flex"}
            flexDirection={"column"}
            alignItems="center"
            justifyItems={"center"}
            sx={{
              boxShadow: `rgba(17, 12, 46, 0.15) 0px 48px 100px 0px`,
            }}
          >
            <Logo size={65} />
            <Box p={3}></Box>
            <Button
              onClick={handleLogin}
              variant="outlined"
              startIcon={
                <Image src="/images/google.png" width={20} height={20} />
              }
            >
              Sign in with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithProtectedPage(Login, ["guest"], true);
