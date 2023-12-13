import { Link } from "react-router-dom"
import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart, faComment } from '@fortawesome/free-regular-svg-icons'

import { patchArticleVotes } from "../utils/api"

function ArticlesListCard ({article}) {
    const [newVotes, setNewVotes] = useState(0)
    const [currentHeart, setCurrentHeart] = useState(regularHeart)

    return (
        <div className="card">
            <Link to={`/articles/${article.article_id}`}>
                <div className="card-line-1">
                    <span>{article.author}</span>
                    <span>{article.created_at.split('T')[0]}</span>
                </div>
                <h3>{article.topic}</h3>
                <h2>{article.title}</h2>
                <img src={article.article_img_url} alt="This is the article image" />
            </Link>
            <div className="like-comment-container">
                <span>
                    <FontAwesomeIcon icon={currentHeart} className="icon" onClick={() => {
                        if (currentHeart === regularHeart) {
                            patchArticleVotes(article.article_id, 1)
                            // optimistic rendering
                            setNewVotes(newVotes + 1)
                            setCurrentHeart(solidHeart)
                        }
                        else {
                            patchArticleVotes(article.article_id, -1)
                            // optimistic rendering
                            setNewVotes(newVotes - 1)
                            setCurrentHeart(regularHeart)
                        }
                    }}/> {article.votes + newVotes}
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} className="icon"/> {article.comment_count}
                </span>
            </div>
        </div>
    )
}

export default ArticlesListCard;