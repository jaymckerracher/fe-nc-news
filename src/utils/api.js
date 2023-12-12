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

export { getArticleById, getArticles };