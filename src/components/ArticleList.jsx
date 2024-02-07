import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllArticles, getArticleById } from "../utils/api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { article_topic } = useParams();

  useEffect(() => {
    getAllArticles(article_topic).then((response) => {
      setArticles(response.data.articles);
      setIsLoading(false);
    });
  }, [article_topic]);

  if (isLoading) return <p>Loading articles...</p>;
  return (
    <div className="articles-div">
      <ul className="articles-list">
        <h2 className="topic-heading">Choose article topic:</h2>
        <nav className="articles-nav">
          <li>
            <Link to="/articles">All articles</Link>
          </li>
          <li>
            <Link to="/articles/topic/coding">Coding</Link>
          </li>
          <li>
            <Link to="/articles/topic/football">Football</Link>
          </li>
          <li>
            <Link to="/articles/topic/cooking">Cooking</Link>
          </li>
        </nav>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="articles-list-item">
              <Link to={`/articles/${article.article_id}`}>
                <h2 className="article-click">{article.title}</h2>
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
