import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/post";

export default function CommentAdder(props) {
  const { comments, setComments } = props;
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  const [commentToAdd, setCommentToAdd] = useState({});
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
        setCommentToAdd(response.data.comment);
        setError(null);
        setComments(comments);
      })
      .catch((err) => {
        setError("Failed to post comment, please check your username is valid");
      });
  };

  return (
    <form
      onSubmit={() => {
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
      ></input>
      <label htmlFor="comment">Comment</label>
      <input
        type="text"
        id="comment"
        name="comment"
        placeholder="Your comment here..."
        onChange={handleFormChange}
      ></input>
      <button>Post comment</button>
      <p>{error}</p>
    </form>
  );
}
