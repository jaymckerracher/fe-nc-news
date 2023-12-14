import { useState, useContext } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart, faTrashCan } from '@fortawesome/free-regular-svg-icons'

import { UserContext } from "../contexts/UserContext"
import { deleteComment } from "../utils/api"
import { ErrorMessageContext, ErrorClassContext } from "../contexts/ErrorContext"

function CommentCard ({comment, setCommentsList, commentsList}) {
    const [newVotes, setNewVotes] = useState(0)
    const [currentHeart, setCurrentHeart] = useState(regularHeart)
    const {user, setUser} = useContext(UserContext);
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext);
    const {errorClass, setErrorClass} = useContext(ErrorClassContext);

    return (
        <div className="card">
            <div className="author-date">
                <span>{comment.author}</span>
                <span>{comment.created_at.split('T')[0]} at {comment.created_at.split('T')[1].split('.')[0]}</span>
            </div>
            <p>{comment.body}</p>
            <div className="like-delete-container-comment">
                <span>
                    <FontAwesomeIcon icon={currentHeart} className="icon" onClick={() => {
                        if (currentHeart === regularHeart) {
                            setNewVotes(newVotes + 1)
                            setCurrentHeart(solidHeart)
                        }
                        else {
                            setNewVotes(newVotes - 1)
                            setCurrentHeart(regularHeart)
                        }
                    }}/> {comment.votes + newVotes}
                </span>
                <span>
                    {user.username === comment.author ? <FontAwesomeIcon icon={faTrashCan} className="icon" onClick={() => {
                        deleteComment(comment.comment_id)
                        .catch(() => {
                            setErrorMessage('Failed to delete the comment')
                            setErrorClass("error-container show-error")
                            setTimeout(() => {
                                setErrorClass("error-container hide-error")
                            }, 10000)
                            setCommentsList(commentsList)
                        })
                        const commentsListCopy = [...commentsList];
                        const newCommentsList = [];
                        commentsListCopy.forEach(com => {
                            if (com.comment_id !== comment.comment_id) newCommentsList.push(com)
                        })
                        setCommentsList(newCommentsList)
                    }}/> : null}
                </span>
            </div>
        </div>
    )
}

export default CommentCard;