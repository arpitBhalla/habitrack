import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import PersonOutline from "@mui/icons-material/PersonOutline";
import QuestionMarkRounded from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@components/common/Link";
import { WithProtectedPage, useUser } from "@context/Auth";
import Tooltip from "@mui/material/Tooltip";

export default function ButtonAppBar() {
  const { authUser } = useUser();
  console.log(authUser);
  return (
    <Box sx={{ flexGrow: 1, pb: 2, zIndex: 200 }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <IconButton aria-label="">
            <Tooltip title="About SCWD">
              <QuestionMarkRounded />
            </Tooltip>
          </IconButton>
          <Chip
            label={authUser?.user_metadata?.full_name || "Your Name"}
            onClick={() => {}}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
