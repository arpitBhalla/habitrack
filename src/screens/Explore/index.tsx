import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NewsArticle } from "@type/NewsArticle";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import { CardWrapper } from "@components/global/Card";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export const ArticleSkeleton = () => {
  return (
    <Box>
      <Skeleton variant="rectangular" height={140} />
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" height={40} />
      <Box display="flex" mt={1}>
        <Skeleton sx={{ mr: 2 }} variant="rectangular" height={40} width={80} />
        <Skeleton variant="rectangular" height={40} width={80} />
      </Box>
    </Box>
  );
};

export default function ImgMediaCard() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/newsapi")
      .then((res) => res.json())
      .then((data) => {
        return new Promise((resolve) =>
          setTimeout(() => {
            setArticles(data);
            setLoading(false);
            resolve("");
          }, 1000)
        );
      });
  }, []);

  return (
    <>
      {/* <Typography variant="h4" color="initial">
        <b>Explore</b>
      </Typography> */}
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardWrapper>
              <Box p={2}>
                <Stack direction="row" spacing={2}>
                  <Avatar>A</Avatar>
                  {/* <Typography variant="body1" color="text.primary">
                  <b>Arpit</b>
                </Typography> */}
                  <TextField
                    fullWidth
                    multiline
                    sx={{ pb: 2 }}
                    rows={3}
                    size="small"
                    margin="dense"
                    id=""
                    placeholder="Something in your mind ..."
                    variant="outlined"
                  />
                </Stack>
                <Box display="flex" justifyContent={"end"}>
                  <Button size="small" variant="contained" color="primary">
                    Post
                  </Button>
                  <Button size="small" variant="text" color="primary">
                    Cancel
                  </Button>
                </Box>
              </Box>
            </CardWrapper>
          </Grid>
          {isLoading
            ? [...new Array(12)].map((_, index) => (
                <Grid key={index} item xs={12} md={6}>
                  <ArticleSkeleton />
                </Grid>
              ))
            : articles.map((article: NewsArticle) => (
                <Grid item xs={12} md={6} key={article.url}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt={article.title}
                      height="140"
                      image={article.urlToImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="body2" component="div">
                        <b>{article.title}</b>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {article.description?.slice(0, 100)}...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Container>
    </>
  );
}
