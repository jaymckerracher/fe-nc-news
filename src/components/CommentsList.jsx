import CommentCard from "./CommentCard"
import CommentAdder from "./CommentAdder";

function CommentsList ({commentsList, isCommentsLoading}) {
    if(isCommentsLoading) {
        return <p className="loading">Comments Loading...</p>
    }
    else {
        return (
            <>
                <CommentAdder/>
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