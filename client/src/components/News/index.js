import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

import "./index.css";
import navBar from "../NavBar";

require("dotenv").config();

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const GetNews = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  console.log(articles);

  useEffect(() => {
    const APIKEY = process.env.NYT_APIKEY;
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Your Money")&sort=newest&api-key=bSAhQ4HUGXtpkH7xVjlrgXALMEWxr35z`
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
            pub_date: article.pub_date,
            byline: article.byline.original,
            snippet: article.snippet,
            web_url: article.web_url,
            section_name: article.section_name,
            image: article.multimedia?.[19]?.url
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
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="news">
        <h2>News</h2>
        <ol>
          {articles.map((article) => (
            <li key={article._id}>
              <Grid container spacing={0}>
                <Grid item xs={2}>
                  <Card className={classes.root}>
                    <Typography className={classes.pos} color="textSecondary">
                      {article.pub_date}
                    </Typography>
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
                      <Typography variant="h5" component="h2">
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
                <Grid item xs={4}>
                  <CardMedia
                      className={classes.media}
                      component="img"
                      src="https://nytimes.com/${article.image}" 
                      alt="news-img"
                    />
                </Grid>
              </Grid>
            </li>
          ))}
        </ol>
        {navBar}
      </div>
    );
  }
};

// const News = () => {
//   return (
//     <div className="news">
//       <h2>News</h2>
//       {navBar}
//     </div>
//   );
// };

// export default News;

export default GetNews;
