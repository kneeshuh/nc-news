import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [mostRecentArticle, setMostRecentArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((response) => {
      setMostRecentArticle(response.data.articles[0]);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="home-div">
      <div className="home-article-div">
        <ul className="home-article-list">
          <h2 className="home-heading">Home</h2>
          <li className="home-article-list-item">
            <h2>Our most recent article:</h2>
            <Link to={`articles/${mostRecentArticle.article_id}`}>
              <h2>{mostRecentArticle.title}</h2>
            </Link>
            <h3>By: {mostRecentArticle.author}</h3>
            <img src={mostRecentArticle.article_img_url} />
          </li>
        </ul>
      </div>
    </div>
  );
}
