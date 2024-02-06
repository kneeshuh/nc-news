import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://ni-nc-news.onrender.com/api'
})

export const postComment = (article_id, commentData) => {
    return newsAPI.post(`/articles/${article_id}/comments`, commentData)
}