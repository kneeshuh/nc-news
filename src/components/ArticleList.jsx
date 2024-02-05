import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/get";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response) => {
      console.log(response.data.articles, "<-- all articles response");
      setArticles(response.data.articles);
    });
  }, []);

  return (
    <div className="articles-div">
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="articles-list-item">
              <h2>{article.title}</h2>
              <h3>by {article.author}</h3>
              <img src={article.article_img_url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
