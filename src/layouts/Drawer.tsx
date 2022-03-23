import * as React from "react";
import { useRouter } from "next/router";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import AccMenu from "@components/global/Menu";
import Notifications from "@components/global/Notifications";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Chip from "@mui/material/Chip";
import { useUser } from "@context/Auth";
import { supabase } from "@utils/supabaseClient";
import Avatar from "@mui/material/Avatar";
import NotificationIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: drawerWidth,
  width: `calc(100% - ${theme.spacing(7)})`,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0} color="transparent">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Habitrack
            </Typography>
            <Notifications />
            <AccMenu />
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxShadow: ` rgba(0, 0, 0, 0.2) 0px 18px 50px -10px`,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <Avatar
            alt="Remy Sharp"
            sx={{ height: 30, width: 30, mr: "4px" }}
            src="/images/logo.png"
          />
        </DrawerHeader>

        <List sx={{ flexGrow: 1 }}>
          {links.map(({ Icon, name, path }, index) => (
            <ListItem
              onClick={() => {
                router.push(path);
              }}
              sx={
                router.pathname === path
                  ? {
                      borderLeft: `3px solid ${theme.palette.primary.main}`,
                      backgroundColor: theme.palette.primary.main + "20",
                      paddingLeft: 1.5,
                    }
                  : { borderLeft: `4px solid transparent`, paddingLeft: 1.5 }
              }
              button
              key={name}
            >
              <Tooltip title={name} placement="right">
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
        <DrawerHeader>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
}
type LinkT = {
  path: string;
  name: string;
  Icon: typeof MailIcon;
};

const links: LinkT[] = [
  {
    path: "/",
    name: "Home",
    Icon: DashboardOutlinedIcon,
  },
  {
    path: "/tasks",
    name: "Work To Do",
    Icon: TaskAltIcon,
  },
  {
    path: "/pomodoro",
    name: "Focus Mode",
    Icon: SpaOutlinedIcon,
  },
  {
    path: "/social",
    name: "Leaderboard",
    Icon: WorkspacePremiumOutlinedIcon,
  },
  {
    path: "/explore",
    name: "Explore",
    Icon: ExploreOutlinedIcon,
  },
  {
    path: "/profile",
    name: "Profile",
    Icon: PermIdentityOutlinedIcon,
  },
];
