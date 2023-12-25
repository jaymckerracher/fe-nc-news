import CommentCard from "./CommentCard"
import CommentAdder from "./CommentAdder";

import { useState } from "react";
import InvalidPath from "./InvalidPath";

function CommentsList ({commentsList, setCommentsList, isCommentsLoading, article_id}) {
    if(isCommentsLoading) {
        return <p className="notification">Comments Loading...</p>
    }
    else if (!commentsList.length) {
        return <></>
    }

    return (
        <>
            <CommentAdder article_id={article_id} setCommentsList={setCommentsList} commentsList={commentsList}/>
            <ul>
                {commentsList.map(comment => {
                    return <li key={comment.comment_id}>
                        <CommentCard comment={comment} setCommentsList={setCommentsList} commentsList={commentsList}/>
                    </li>
                })}
            </ul>
        </>
    )
}

export default CommentsList;