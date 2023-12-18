import { useState, useEffect, useContext } from 'react'
import { getArticles } from '../utils/api';

import ArticlesList from "./ArticlesList";

function Home () {
    const [articlesRequest, setArticlesRequest] = useState('https://jay-mckerracher-nc-news.onrender.com/api/articles')
    const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = {}

    useEffect(() => {
        getArticles(articlesRequest, params)
            .then(body => {
                setArticlesList(body)
                setIsLoading(false)
        })
    }, [articlesRequest, params])

    return (
        <ArticlesList articlesList={articlesList} isLoading={isLoading} params={params}/>
    )
}

export default Home;