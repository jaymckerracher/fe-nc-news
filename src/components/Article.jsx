import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../utils/api";

import ArticleCard from "./ArticleCard";
import CommentsList from "./CommentsList";
import CommentAdder from "./CommentAdder";

function Article () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticleById(article_id)
            .then(body => {
                setArticle(body)
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