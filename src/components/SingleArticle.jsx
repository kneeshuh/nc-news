import { useState, useEffect } from "react";
import { getArticleComments } from "../utils/get";

export default function SingleArticle(props) {
  const { articles } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(articles.article_id).then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  return (
    <div className="single-comment-div">
      <div className="articles-div">
        <ul className="articles-list">
          <li className="articles-list-item">
            <h2>{articles.title}</h2>
            <h3>by {articles.author}</h3>
            <img src={articles.article_img_url} />
            <p>{articles.body}</p>
          </li>
        </ul>
      </div>
      <div className="comments-div">
        <ul className="comments-list">
          <h2>Comments</h2>
          {comments.map((comment) => {
            {
              console.log(comment), "comment in div";
            }
            return (
              <li key={comment.comment_id} className="comments-list-item">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <h4>Votes: {comment.votes}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
