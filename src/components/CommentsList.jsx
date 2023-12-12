function CommentsList ({commentsList, isCommentsLoading}) {
    if(isCommentsLoading) {
        return <p>Comments Loading...</p>
    }
    else {
        return (
            <ul>
                {commentsList.map(comment => {
                    return <li key={comment.comment_id}>
                        <p>{comment.author}</p>
                        <p>{comment.created_at}</p>
                        <p>{comment.body}</p>
                        <p>{comment.votes}</p>
                    </li>
                })}
            </ul>
        )
    }
}

export default CommentsList;