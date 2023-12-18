import ArticleCard from "./ArticleCard"
import QuerySelector from './QuerySelector';

function ArticlesList ({articlesList, isLoading, params}) {
    if(isLoading) {
        return <p className="loading">Loading...</p>
    }
    return (
        <>
            <QuerySelector params={params}/>
            <ul>
                {articlesList.map(article => {
                    return <li key={article.article_id}>
                        <ArticleCard article={article}/>
                    </li>
                })}
            </ul>
        </>
    )
}

export default ArticlesList;