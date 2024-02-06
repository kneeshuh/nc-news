import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://ni-nc-news.onrender.com/api'
})

export const patchArticleVote = (article_id, increment) => {
    const body = {
        "inc_votes": increment
    }
    return newsAPI.patch(`articles/${article_id}`, body)
}