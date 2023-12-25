import ArticleCard from "./ArticleCard"
import InvalidPath from "./InvalidPath";

function SingleArticleCard ({article, isArticleLoading}) {
    if (isArticleLoading) {
        return <p className="notification">Article Loading...</p>
    }
    else if (!article.article_id) {
        return <InvalidPath message="This article doesn't exist!"/>
    }

    return (
        <ArticleCard article={article}/>
    )
}

export default SingleArticleCard;