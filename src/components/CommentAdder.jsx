import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import { useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { UserContext } from "../contexts/UserContext"
import { ErrorMessageContext, ErrorClassContext } from "../contexts/ErrorContext"

import { postComment } from '../utils/api';

function CommentAdder ({article_id, setCommentsList, commentsList}) {
    const {user, setUser} = useContext(UserContext)
    const {errorMessage, setErrorMessage} = useContext(ErrorMessageContext)
    const {errorClass, setErrorClass} = useContext(ErrorClassContext)
    const [commentBody, setCommentBody] = useState('')
    const navigate = useNavigate()

    return (
        <form action="" className="comment-form card" onSubmit={(event) => {
                event.preventDefault()
                if(!user.username) {
                    navigate('/login');
                    setErrorMessage('You must be signed in to post a comment')
                        setErrorClass("error-container show-error")
                        setTimeout(() => {
                            setErrorClass("error-container hide-error")
                        }, 10000)
                }
                else {
                    postComment(article_id, user.username, commentBody)
                        .then(comment => {
                            setCommentBody('')
                            setCommentsList(currVal => [...currVal, comment])
                        })
                        .catch(() => {
                            setErrorMessage('Failed to post comment!')
                            setErrorClass("error-container show-error")
                            setTimeout(() => {
                                setErrorClass("error-container hide-error")
                            } ,10000)
                        })
                }
            }}>
            <label htmlFor="comment-textarea">Add a comment:</label>
            <textarea name="comment-data" id="comment-textarea" value={commentBody} placeholder='Share your thoughts...' onChange={(event) => {
                setCommentBody(event.target.value)
            }}></textarea>
            <button className='sign-button' disabled={!commentBody || !commentBody.trim().length}>
                <FontAwesomeIcon icon={faCirclePlus} className='icon'></FontAwesomeIcon>
            </button>
        </form>
    )
}

export default CommentAdder;