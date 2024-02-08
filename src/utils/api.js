import axios from 'axios'

const newsAPI = axios.create({
    baseURL: 'https://ni-nc-news.onrender.com/api'
})

export const getAllArticles = (article_topic, sort, order) => {
    return newsAPI.get('/articles', {
        params: {
            topic: article_topic,
            sort_by: sort,
            order: order
        },
    })
}

export const getArticleById = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`)
}

export const getArticleComments = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`)
}

export const patchArticleVote = (article_id, increment) => {
    const body = {
        "inc_votes": increment
    }
    return newsAPI.patch(`articles/${article_id}`, body)
}

export const postComment = (article_id, commentData) => {
    return newsAPI.post(`/articles/${article_id}/comments`, commentData)
}

export const deleteComment = (comment_id) => {
    return newsAPI.delete(`/comments/${comment_id}`)
}

export const getAllTopics = () => {
    return newsAPI.get(`/topics`)
}

export const getAllUsers = () => {
    return newsAPI.get(`/users`)
}