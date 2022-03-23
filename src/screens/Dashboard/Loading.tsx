import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

export default function ActionAreaCard() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item md={12}>
          <Skeleton variant="rectangular" height={30} width={"30%"} />
        </Grid>
        <Grid item md={4}>
          <Skeleton variant="rectangular" height={180} />
        </Grid>
        <Grid item md={4}>
          <Skeleton variant="rectangular" height={180} />
        </Grid>
        <Grid item md={4}>
          <Skeleton variant="rectangular" height={180} />
        </Grid>
        <Grid item md={8}>
          <Skeleton variant="rectangular" height={40} />
          <br />
          <Skeleton variant="rectangular" height={180} />
        </Grid>
        <Grid item md={4}>
          <Skeleton variant="rectangular" height={220} />
        </Grid>
      </Grid>
    </Container>
  );
}
