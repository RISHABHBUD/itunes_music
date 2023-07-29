import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  backButton: {
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ResultPage = () => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const searchResults = location.state.searchResults;

  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Button
        className={classes.backButton}
        variant="outlined"
        color="primary"
        onClick={handleBack}
      >
        Back
      </Button>
      <Typography variant="h4" className={classes.header}>
        SEARCH RESULTS
      </Typography>
      <Grid container spacing={3}>
        {searchResults.map((result) => (
          <Grid item xs={12} sm={6} md={3} key={result.artistId}>
            <Card>
              <CardMedia
                component="img"
                alt={result.artistName}
                height="100"
                image={result.artworkUrl100}
              />
              <CardContent>
                <Typography variant="h6">{result.artistName}</Typography>
                <Typography variant="subtitle1">
                  Collection: {result.collectionName}
                </Typography>
                <Typography variant="subtitle2">
                  Genre: {result.primaryGenreName}
                </Typography>
                <Typography variant="subtitle2">
                  Release Date: {result.releaseDate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ResultPage;
