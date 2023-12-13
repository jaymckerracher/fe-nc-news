import axios from "axios"

function getArticles (url) {
    return axios
        .get(url)
        .then(res => {
            return res.data.articles
        })
}

function getArticleById (article_id) {
    return axios
        .get(`https://jay-mckerracher-nc-news.onrender.com/api/articles/${article_id}`)
        .then(res => {
            return res.data.article
        })
}

function getCommentsByArticle (article_id) {
    return axios
        .get(`https://jay-mckerracher-nc-news.onrender.com/api/articles/${article_id}/comments`)
        .then(res => {
            return res.data.comments
        })
}

function patchArticleVotes (article_id, newVote) {
    return axios
        .patch(`https://jay-mckerracher-nc-news.onrender.com/api/articles/${article_id}`, {
            inc_votes: newVote
        })
        .then(res => {
            return res
        })
}

export { getArticleById, getArticles, getCommentsByArticle, patchArticleVotes };