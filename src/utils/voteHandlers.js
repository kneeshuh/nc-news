export const handleUpvote = (article_id) => {
    setVotes(votes + 1);
    patchArticleUpvote(article_id);
  };

export const handleDownvote = (article_id) => {
    setVotes(votes - 1);
    patchArticleDownvote(article_id);
  };