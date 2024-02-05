import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles, getArticleById } from "../utils/get";
import SingleArticle from "./SingleArticle";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  const articleHandler = (article_id) => {
    getArticleById(article_id).then((response) => {
      setArticles(response.data.article);
    });
  };

  if (articles.length === undefined) {
    return <SingleArticle articles={articles} />;
  }
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
                  <a>{article.title}</a>
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

// routing to page with correct article id but need to then render that specific article on that page
