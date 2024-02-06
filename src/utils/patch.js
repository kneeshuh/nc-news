import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://ni-nc-news.onrender.com/api'
})

export const patchArticleUpvote = (article_id) => {
    const increment = {
        "inc_votes": 1
    }
    newsAPI.patch(`/articles/${article_id}`, increment)
}

export const patchArticleDownvote = (article_id) => {
    const increment = {
        "inc_votes": -1
    }
    newsAPI.patch(`/articles/${article_id}`, increment)
}