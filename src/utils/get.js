import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://ni-nc-news.onrender.com/api'
})

export const getAllArticles = () => {
    return newsAPI.get('/articles')
}