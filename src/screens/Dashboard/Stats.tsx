import * as React from "react";
import Card, { CardWrapper } from "@components/global/Card";
import Grid from "@mui/material/Grid";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import dynamic from "next/dynamic";
import { useUser } from "@context/Auth";
import { supabase } from "@utils/supabaseClient";

const Chart = dynamic(() => import("./chart"), {
  ssr: false,
});
export default function ActionAreaCard() {
  const [open, setOpen] = React.useState("");
  const { authUser } = useUser();
  const [userData, setUserData] = React.useState({});
  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("userProfiles")
      .select()
      .eq("id", authUser?.id);
    if (data) setUserData(data[0]);
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card
          title="Day Streak"
          number={(userData?.streak || "0") + " days"}
          description={"Among top 34% users"}
          Icon={WhatshotOutlinedIcon}
          color="#F76707"
        />
      </Grid>
      <Grid item md={4}>
        <Card
          title="Points"
          number={userData?.points || 0}
          description={"Rank 34 among 89 users"}
          Icon={ControlPointDuplicateIcon}
          color="#1C7ED6"
        />
      </Grid>
      <Grid item md={4}>
        <Card
          title="Pending Tasks"
          number={"4 "}
          description={"You've been working hard today!"}
          Icon={WorkspacePremiumOutlinedIcon}
          color="#F03E3E"
        />
      </Grid>
    </Grid>
  );
}
