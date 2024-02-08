import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [mostRecentArticle, setMostRecentArticle] = useState({});

  useEffect(() => {
    getAllArticles().then((response) => {
      console.log(response.data.articles[0]);
      setMostRecentArticle(response.data.articles[0]);
    });
  }, []);

  return (
    <div className="home-div">
      <h2 className="home-heading">Home</h2>
      <div className="home-article-div">
        <h2 className="home-heading">Our most recent article:</h2>
        <Link to={`articles/${mostRecentArticle.article_id}`}>
          <h2>{mostRecentArticle.title}</h2>
        </Link>
        <h3>By: {mostRecentArticle.author}</h3>
        <img src={mostRecentArticle.article_img_url} />
      </div>
    </div>
  );
}
