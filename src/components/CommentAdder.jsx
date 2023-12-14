import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function CommentAdder () {
    return (
        <form action="" className="comment-form card">
            <label htmlFor="comment-textarea">Add a comment:</label>
            <textarea name="comment-data" id="comment-textarea" placeholder='Share your thoughts...'></textarea>
            <FontAwesomeIcon icon={faCirclePlus} className='icon'></FontAwesomeIcon>
        </form>
    )
}

export default CommentAdder;