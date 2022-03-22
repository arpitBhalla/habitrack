import * as React from "react";
import Card from "@components/global/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Table from "./Table";
import PanelBody from "./SidePanel";

export default function ActionAreaCard() {
  return (
    <Container maxWidth="xl">
      <PanelBody>
        <Grid container spacing={3}>
          <Grid item md={3}>
            <Card />
          </Grid>
          <Grid item md={3}>
            <Card />
          </Grid>
          <Grid item md={3}>
            <Card />
          </Grid>
          <Grid item md={3}>
            <Card />
          </Grid>
        </Grid>
        <Table />
      </PanelBody>
    </Container>
  );
}
