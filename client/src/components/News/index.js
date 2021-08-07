import React, { useState, useEffect } from "react";

import "./index.css";
import navBar from "../NavBar";

const GetNews = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=money&fq=section_name:("Your Money")&api-key=bSAhQ4HUGXtpkH7xVjlrgXALMEWxr35z`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setArticles(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="news">
        <h2>News</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              {article.headline.main} {article.pub_date}
            </li>
          ))}
        </ul>
        {navBar}
      </div>
    );
  }
}

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
