import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

export default function ActionAreaCard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <Skeleton variant="rectangular" sx={{ mb: 1 }} height={40} />
        <Skeleton variant="rectangular" sx={{ mb: 1 }} height={40} />
        <Skeleton variant="rectangular" sx={{ mb: 1 }} height={40} />
        <Skeleton variant="rectangular" sx={{ mb: 1 }} height={40} />
        <Skeleton variant="rectangular" sx={{ mb: 1 }} height={40} />
        <Skeleton variant="rectangular" sx={{ mb: 1 }} height={40} />
        <Skeleton variant="rectangular" sx={{ mb: 1 }} height={40} />
      </Grid>
      <Grid item xs={4}>
        <Skeleton variant="rectangular" height={340} />
      </Grid>
    </Grid>
  );
}
