import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleCard from "./ArticleCard";
import CommentsList from "./CommentsList";
import CommentAdder from "./CommentAdder";

function Article () {
    const {article_id} = useParams();
    const [articleRequest, setArticleRequest] = useState(`https://jay-mckerracher-nc-news.onrender.com/api/articles/${article_id}`)
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(articleRequest)
            .then(res => {
                setArticle(res.data.article)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <ArticleCard article={article} isLoading={isLoading}/>
            {/* <CommentsList />
            <CommentAdder /> */}
        </>
    )
}

export default Article;