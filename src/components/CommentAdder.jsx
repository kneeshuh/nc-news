import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/post";

export default function CommentAdder(props) {
  const { comments, setComments } = props;
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [commentAdded, setCommentAdded] = useState(null);
  const [addingComment, setAddingComment] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
  });

  const handleFormChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  };

  const handleCommentSubmit = (article_id) => {
    event.preventDefault();
    const commentData = {
      username: formData.username,
      body: formData.comment,
    };
    postComment(article_id, commentData)
      .then((response) => {
        setError(null);
        setComments(comments);
        setCommentAdded("Comment Added");
        setAddingComment(false);
      })
      .catch((err) => {
        setError("Failed to post comment, please check your username is valid");
        setAddingComment(false);
      });
  };

  if (addingComment && error === null) return <p>Adding comment...</p>;
  return (
    <div className="add-comments-div">
      <p>Add a comment:</p>
      <form
        onSubmit={() => {
          setAddingComment(true);
          handleCommentSubmit(article_id);
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your username here..."
          onChange={handleFormChange}
          required
        ></input>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          placeholder="Your comment here..."
          onChange={handleFormChange}
          required
        ></input>
        <button>Post comment</button>
        <p>{error}</p>
        <p>{commentAdded}</p>
      </form>
    </div>
  );
}
