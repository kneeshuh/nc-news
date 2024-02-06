import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles, getArticleById } from "../utils/get";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;
  return (
    <div className="articles-div">
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="articles-list-item">
              <Link to={`/articles/${article.article_id}`}>
                <h2
                  className="article-click"
                  onClick={() => articleHandler(article.article_id)}
                >
                  {article.title}
                </h2>
              </Link>
              <h3>by {article.author}</h3>
              <img src={article.article_img_url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
