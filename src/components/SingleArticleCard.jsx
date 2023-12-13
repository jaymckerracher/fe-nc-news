import ArticleCard from "./ArticleCard"

function SingleArticleCard ({article, isArticleLoading}) {
    if (isArticleLoading) {
        return <p className="loading">Article Loading...</p>
    }
    return (
        <ArticleCard article={article}/>
    )
}

export default SingleArticleCard;