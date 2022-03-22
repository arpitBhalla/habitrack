import * as React from "react";
import Card, { CardWrapper } from "@components/global/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "./Dialog";
import Table from "./Table";
import PanelBody from "./SidePanel";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ActionAreaCard() {
  const [open, setOpen] = React.useState("");

  return (
    <Container maxWidth="xl">
      <PanelBody open={open} setOpen={setOpen}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <Card
              title="Day Streak"
              number={"5 days"}
              description={"You've been working hard today!"}
              Icon={WhatshotOutlinedIcon}
              color="#F76707"
            />
          </Grid>
          <Grid item md={4}>
            <Card
              title="Points"
              number={1040}
              description={"Rank 34 among 89 users"}
              Icon={ControlPointDuplicateIcon}
              color="#1C7ED6"
            />
          </Grid>
          <Grid item md={4}>
            <Card
              title="Level"
              number={"Noob"}
              description={"You've been working hard today!"}
              Icon={WorkspacePremiumOutlinedIcon}
              color="#F03E3E"
            />
          </Grid>
        </Grid>
        <Grid sx={{ mt: 2 }} container spacing={3}>
          <Grid item md={8}>
            <Table
              onClick={(rowName: string) => {
                setOpen(rowName);
              }}
            />
          </Grid>
          <Grid item md={4}>
            <CardWrapper>
              <Box p={2}>
                <LineChart
                  width={350}
                  height={200}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* <XAxis dataKey="name" />
                  <YAxis /> */}
                  {/* <Tooltip />
                  <Legend /> */}
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </Box>
            </CardWrapper>
          </Grid>
        </Grid>
      </PanelBody>
      <Dialog />
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
