import { Link } from "react-router-dom"

function ArticlesList ({articlesList, isLoading}) {
    if(isLoading) {
        return <p>Loading...</p>
    }
    return (
        <ul>
            {articlesList.map(article => {
                return (
                    <Link to={`/articles/${article.article_id}`} key={article.article_id}>
                        <li >
                            <p>{article.title}</p>
                            <p>{article.author}</p>
                            <p>{article.topic}</p>
                            <p>{article.created_at.split('T')[0]} at {article.created_at.split('T')[1].split('.')[0]}</p>
                            <p>comments: {article.comment_count}</p>
                            <p>likes: {article.votes}</p>
                            <img src={article.article_img_url} alt="This is the article image" />
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default ArticlesList;