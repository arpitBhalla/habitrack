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

const drawerWidth = 400;

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

export default function PersistentDrawerRight(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const d = (id?: string) => {
    router.query.info = ["3", id || ""];
    router.push(router);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Main open={open}>
        <Button variant="text" color="primary" onClick={handleDrawerOpen}>
          Open
        </Button>
        {props.children}
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          zIndex: theme.zIndex.appBar - 1,
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <Toolbar />
        <Box
          display="flex"
          p={2}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography variant="h5" color="textSecondary">
            Panel
          </Typography>
          <IconButton
            aria-label="close drawer"
            onClick={() => {
              handleDrawerClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <div>Panel</div>
      </Drawer>
    </Box>
  );
}
