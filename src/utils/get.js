import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://ni-nc-news.onrender.com/api'
})

export const getAllArticles = () => {
    return newsAPI.get('/articles')
}

export const getArticleById = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`)
}

export const getArticleComments = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`)
}