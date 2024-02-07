import { getArticleComments } from "../utils/api";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import DeleteIcon from "@mui/icons-material/Delete";
import CommentAdder from "./CommentAdder";
import { deleteComment } from "../utils/api";

export default function Comments() {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    getArticleComments(article_id).then((response) => {
      setComments(response.data.comments);
      setIsLoading(false);
    });
  }, [comments]);

  const deleteHandler = (comment_id) => {
    setIsDeleting(true);
    deleteComment(comment_id).then(() => {
      setIsDeleting(false);
    });
  };

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
          <h2 className="comments-heading">Comments</h2>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comments-list-item">
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <h4>Votes: {comment.votes}</h4>
                {comment.author === user.username && (
                  <button
                    className="comments-delete-button"
                    onClick={() => {
                      deleteHandler(comment.comment_id);
                    }}
                  >
                    Delete Comment {<DeleteIcon />}
                  </button>
                )}
                {isDeleting && <p>Deleting comment...</p>}
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
