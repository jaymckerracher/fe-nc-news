import { useState, useEffect, useContext } from 'react'
import { getArticles } from '../utils/api';

import ArticlesList from "./ArticlesList";
import QuerySelector from './QuerySelector';

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
        <>
            <QuerySelector />
            <ArticlesList articlesList={articlesList} isLoading={isLoading}/>
        </>
    )
}

export default Home;