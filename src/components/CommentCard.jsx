import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

function CommentCard ({comment}) {
    const [newVotes, setNewVotes] = useState(0)
    const [currentHeart, setCurrentHeart] = useState(regularHeart)

    return (
        <div className="card">
            <div className="author-date">
                <span>{comment.author}</span>
                <span>{comment.created_at.split('T')[0]} at {comment.created_at.split('T')[1].split('.')[0]}</span>
            </div>
            <p>{comment.body}</p>
            <div className="like-container-comment">
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
            </div>
        </div>
    )
}

export default CommentCard;