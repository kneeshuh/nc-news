import { useState, useEffect } from "react";
import { getArticleById } from "../utils/get";
import { useParams } from "react-router-dom";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Comments from "./Comments";

export default function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticle(response.data.article);
      setVotes(response.data.article.votes);
      setIsLoading(false);
    });
  }, []);

  const handleUpvote = () => {
    console.log("upvote clicked");
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    console.log("downvote clicked");
    setVotes(votes - 1);
  };

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
            <p>Votes: {votes}</p>
            <div className="votes-div">
              <button onClick={handleUpvote}>
                <ArrowUpwardIcon />
              </button>
              <p className="votes-p">Vote</p>
              <button onClick={handleDownvote}>
                <ArrowDownwardIcon />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="comments-div">{<Comments />}</div>
    </div>
  );
}
