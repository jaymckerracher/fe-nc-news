import ArticleCard from "./ArticleCard"

function ArticlesList ({articlesList, isLoading}) {
    if(isLoading) {
        return <p className="loading">Loading...</p>
    }
    return (
        <ul>
            {articlesList.map(article => {
                return <li key={article.article_id}>
                    <ArticleCard article={article}/>
                </li>
            })}
        </ul>
    )
}

export default ArticlesList;