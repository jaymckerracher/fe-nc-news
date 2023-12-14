import CommentCard from "./CommentCard"
import CommentAdder from "./CommentAdder";

import { useState } from "react";

function CommentsList ({commentsList, setCommentsList, isCommentsLoading, article_id}) {
    if(isCommentsLoading) {
        return <p className="loading">Comments Loading...</p>
    }
    else {
        return (
            <>
                <CommentAdder article_id={article_id} setCommentsList={setCommentsList} commentsList={commentsList}/>
                <ul>
                    {commentsList.map(comment => {
                        return <li key={comment.comment_id}>
                            <CommentCard comment={comment}/>
                        </li>
                    })}
                </ul>
            </>
        )
    }
}

export default CommentsList;