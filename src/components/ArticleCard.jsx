function ArticleCard ({article, isArticleLoading}) {
    if (isArticleLoading) {
        return <p>Article Loading...</p>
    }
    return (
        <div id='card-container'>
            <p>{article.title}</p>
            <p>{article.author}</p>
            <p>{article.topic}</p>
            <p>{article.created_at.split('T')[0]} at {article.created_at.split('T')[1].split('.')[0]}</p>
            <p>{article.body}</p>
            <img src={article.article_img_url} alt="This is the article image" />
            <p>comments: {article.comment_count}</p>
            <p>likes: {article.votes}</p>
        </div>
    )
}

export default ArticleCard;