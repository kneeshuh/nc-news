import { getArticleComments } from "../utils/get";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CommentAdder from "./CommentAdder";

export default function Comments() {
  let { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setComments(response.data.comments);
      setIsLoading(false);
    });
  }, [comments]);

  if (isLoading) return <p>Loading comments...</p>;
  if (comments.length === 0) {
    return (
      <div className="comments-div">
        <ul className="comments-list">
          <h2>Comments</h2>
          <li className="comments-list-item">
            <p>No Comments Yet</p>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <div className="comments-div">
        <ul className="comments-list">
          <h2>Comments</h2>
          {comments.map((comment) => {
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
      <div className="add-comment-div">
        <CommentAdder comments={comments} setComments={setComments} />
      </div>
    </div>
  );
}
