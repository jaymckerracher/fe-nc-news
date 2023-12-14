import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleById, getCommentsByArticle } from "../utils/api";
import { UserContext } from '../contexts/UserContext';

import SingleArticleCard from "./SingleArticleCard";
import CommentsList from "./CommentsList";

function Article () {
    const {article_id} = useParams();
    const [article, setArticle] = useState({})
    const [isArticleLoading, setIsArticleLoading] = useState(true)
    const [commentsList, setCommentsList] = useState([])
    const [isCommentsLoading, setIsCommentsLoading] = useState(true)
    const {user, setUser} = useContext(UserContext)

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
    }, [user])

    return (

        <>
            <SingleArticleCard article={article} isArticleLoading={isArticleLoading}/>
            <CommentsList commentsList={commentsList} setCommentsList={setCommentsList} isCommentsLoading={isCommentsLoading} article_id={article_id}/>
        </>
    )
}

export default Article;