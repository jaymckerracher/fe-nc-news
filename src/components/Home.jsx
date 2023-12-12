import { useState, useEffect } from 'react'
import axios from 'axios'

import ArticlesList from "./ArticlesList";

function Home () {
    const [articlesRequest, setArticlesRequest] = useState('https://jay-mckerracher-nc-news.onrender.com/api/articles') // link for axios
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(articlesRequest)
            .then(res => {
                setArticlesList(res.data.articles)
                setIsLoading(false)
        })
    }, [])

    return (
        <ArticlesList articlesList={articlesList} isLoading={isLoading}/>
    )
}

export default Home;