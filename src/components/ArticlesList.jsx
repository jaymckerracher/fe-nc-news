import ArticlesListCard from "./ArticlesListCard"

function ArticlesList ({articlesList, isLoading}) {
    if(isLoading) {
        return <p>Loading...</p>
    }
    return (
        <ul>
            {articlesList.map(article => {
                return <li key={article.article_id}>
                    <ArticlesListCard article={article}/>
                </li>
            })}
        </ul>
    )
}

export default ArticlesList;