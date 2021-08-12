import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import header from "./assets/news_header.png";
import banner from "./assets/news_banner.png";

import "./index.css";
import NavBar from "../NavBar";

const NYT_APIKEY = require("./config");

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
    height: 250,
    boxShadow: "none",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 200,
    width: 300,
    margin: "auto",
    paddingTop: 25,
  },
});

const GetNews = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  console.log(articles);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Your Money")&sort=newest&api-key=${NYT_APIKEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          //   setArticles(result);
          const articleData = result.response.docs.map((article) => ({
            _id: article._id,
            headline: article.headline.main,
            abstract: article.abstract,
            pub_date: moment(article.pub_date).format("dddd, MMM Do"),
            byline: article.byline.original,
            snippet: article.snippet,
            web_url: article.web_url,
            section_name: article.section_name,
            image: `https://nytimes.com/${article.multimedia?.[0]?.url}`,
          }));

          setArticles(articleData);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const classes = useStyles();

  if (error) {
    return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...</div>;
  } else {
    return (
      <div className="news">

        <Grid container spacing={0}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <CardMedia component="img" src={header} alt="New York Times" />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <CardMedia
              component="img"
              image={banner}
              alt="Latest articles from 'Your Money'"
            />
          </Grid>
        </Grid>
        <ol>
          {articles.map((article) => (
            <li key={article._id}>
              <Grid container spacing={5}>
                <Grid item xs={1}></Grid>
                <Grid item xs={1}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography className={classes.title} gutterBottom>
                        {article.pub_date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {article.section_name}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h2"
                        fontFamily="Monospace"
                      >
                        {article.headline}
                      </Typography>

                      <Typography variant="body2" component="p">
                        {article.snippet}
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary">
                        {article.byline}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={article.web_url}>
                        Read more
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    src={article.image}
                    alt="Article Thumbnail"
                  />
                </Grid>
              </Grid>
              <Divider variant="middle" />
            </li>
          ))}
        </ol>
        <NavBar/>
      </div>
    );
  }
};

export default GetNews;
