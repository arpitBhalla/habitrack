import * as React from "react";
import Container from "@mui/material/Container";
import Table from "./LeaderBoardTable";
import Profile from "./Profile";
import Typography from "@mui/material/Typography";
import SidePanel from "@arpitbhalla/habitrack/components/SidePanel";
import { supabase } from "@arpitbhalla/habitrack/utils/supabaseClient";
import Loading from "./Loading";

type User = {
  id: string;
  full_name: string;
  points: string | number;
  streak: string;
};

export default function ActionAreaCard() {
  const [open, setOpen] = React.useState("Arpit Bhalla");
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState<User[]>([]);

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from<User>("userProfiles")
      .select()
      .order("points", { ascending: false });
    if (data) setUsers(data);
    setLoading(false);
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Typography sx={{ mb: 1 }} variant="h4" color="initial">
          <b>Leader Board</b>
        </Typography>
        <Loading />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography sx={{ mb: 1 }} variant="h4" color="initial">
        <b>Leader Board</b>
      </Typography>
      <SidePanel
        open={Boolean(open)}
        body={
          <Table
            users={users}
            onClick={(rowName: string) => {
              setOpen(rowName);
            }}
          />
        }
        sideBody={<Profile setOpen={setOpen} open={open} />}
      />
    </Container>
  );
}
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
