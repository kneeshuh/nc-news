import { useState, useEffect } from "react";
import { getArticleById } from "../utils/get";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

export default function SingleArticle() {
  let { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response.data.article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading article...</p>;
  return (
    <div className="single-article-div">
      <div className="articles-div">
        <ul className="articles-list">
          <li key={article.article_id} className="articles-list-item">
            <h2>{article.title}</h2>
            <h3>by {article.author}</h3>
            <img src={article.article_img_url} />
            <p>{article.body}</p>
          </li>
        </ul>
      </div>
      <div className="comments-div">{<Comments />}</div>
    </div>
  );
}
