function ArticlesList (props) {
    if(props.isLoading) {
        return <p>Loading...</p>
    }
    return (
        <ul>
            {props.articlesList.map(article => {
                return (
                    <li key={article.article_id}>
                        <p>{article.title}</p>
                        <p>{article.author}</p>
                        <p>{article.topic}</p>
                        <p>{article.created_at.split('T')[0]} at {article.created_at.split('T')[1].split('.')[0]}</p>
                        <img src={article.article_img_url} alt="This is the article image" />
                    </li>
                )
            })}
        </ul>
    )
}

export default ArticlesList;