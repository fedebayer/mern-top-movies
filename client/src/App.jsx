import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import { useEffect } from "react";

import { getPosts } from "./actions/posts";

import { useDispatch } from "react-redux";
import movieImg from "./assets/img/movieImg.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Top Movies
        </Typography>
        <img
          className={classes.image}
          src={movieImg}
          alt="movieImg"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
