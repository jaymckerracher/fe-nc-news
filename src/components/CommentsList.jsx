import CommentCard from "./CommentCard"

function CommentsList ({commentsList, isCommentsLoading}) {
    if(isCommentsLoading) {
        return <p className="loading">Comments Loading...</p>
    }
    else {
        return (
            <ul>
                {commentsList.map(comment => {
                    return <li key={comment.comment_id}>
                        <CommentCard comment={comment}/>
                    </li>
                })}
            </ul>
        )
    }
}

export default CommentsList;