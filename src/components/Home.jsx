import { useState, useEffect } from 'react'

import { getArticles } from '../utils/api';

import ArticlesList from "./ArticlesList";

function Home () {
    const [articlesRequest, setArticlesRequest] = useState('https://jay-mckerracher-nc-news.onrender.com/api/articles')
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles(articlesRequest)
            .then(body => {
                setArticlesList(body)
                setIsLoading(false)
        })
    }, [])

    return (
        <ArticlesList articlesList={articlesList} isLoading={isLoading}/>
    )
}

export default Home;