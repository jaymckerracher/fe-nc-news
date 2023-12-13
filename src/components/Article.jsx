import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleById, getCommentsByArticle } from "../utils/api";

import SingleArticleCard from "./SingleArticleCard";
import CommentsList from "./CommentsList";
import CommentAdder from "./CommentAdder";

function Article () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({})
    const [isArticleLoading, setIsArticleLoading] = useState(true)
    const [commentsList, setCommentsList] = useState([])
    const [isCommentsLoading, setIsCommentsLoading] = useState(true)


    useEffect(() => {
        getArticleById(article_id)
            .then(body => {
                setArticle(body)
                setIsArticleLoading(false)
        })
    }, [])

    useEffect(() => {
        getCommentsByArticle(article_id)
            .then(body => {
                setCommentsList(body)
                setIsCommentsLoading(false)
            })
    })

    return (
        <>
            <SingleArticleCard article={article} isArticleLoading={isArticleLoading}/>
            <CommentsList commentsList={commentsList} isCommentsLoading={isCommentsLoading}/>
            <CommentAdder />
        </>
    )
}

export default Article;