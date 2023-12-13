import { Link } from "react-router-dom"
import { useState, useContext } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart, faComment } from '@fortawesome/free-regular-svg-icons'

import { patchArticleVotes } from "../utils/api"
import { ErrorMessageContext, ErrorClassContext } from "../contexts/ErrorContext"

function ArticleCard ({article}) {
    const [newVotes, setNewVotes] = useState(0)
    const [currentHeart, setCurrentHeart] = useState(regularHeart)
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext)
    const {errorClass, setErrorClass} = useContext(ErrorClassContext)

    function addLike (num) {
        setNewVotes(newVotes + num)
        setCurrentHeart(solidHeart)
    }

    function removeLike (num) {
        setNewVotes(newVotes - num)
        setCurrentHeart(regularHeart)
    }

    return (
        <div className="card">
            <Link to={`/articles/${article.article_id}`}>
                <div className="author-date">
                    <span>{article.author}</span>
                    <span>{article.created_at.split('T')[0]} at {article.created_at.split('T')[1].split('.')[0]}</span>
                </div>
                <h3>
                    <span>{article.topic}</span>
                </h3>
                <h2>{article.title}</h2>
                {article.body ? <p>{article.body}</p> : null}
                <img src={article.article_img_url} alt="This is the article image" />
                <div className="like-comment-container-article">
                    <span>
                        <FontAwesomeIcon icon={currentHeart} className="icon" onClick={(event) => {
                            event.preventDefault();
                            if (currentHeart === regularHeart) {
                                patchArticleVotes(article.article_id, 1)
                                .catch(() => {
                                    removeLike(0)
                                    setErrorMessage('Unable to like the post')
                                    setErrorClass("error-container show-error")
                                    setTimeout(() => {
                                        setErrorClass("error-container hide-error")
                                    }, 10000)
                                })
                                addLike(1);
                            }
                            else {
                                patchArticleVotes(article.article_id, -1)
                                .catch(() => {
                                    addLike(0)
                                    setErrorMessage('Unable to unlike the post')
                                    setErrorClass("error-container show-error")
                                    setTimeout(() => {
                                        setErrorClass("error-container hide-error")
                                    } ,10000)
                                })
                                removeLike(1);
                            }
                        }}/> {article.votes + newVotes}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faComment} className="icon"/> {article.comment_count}
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCard;