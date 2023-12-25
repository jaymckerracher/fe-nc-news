import ArticleCard from "./ArticleCard"
import QuerySelector from './QuerySelector';

function ArticlesList ({articlesList, isLoading, setParams}) {
    if(isLoading) {
        return <p className="notification">Loading...</p>
    }
    
    return (
        <>
            <QuerySelector setParams={setParams}/>
            {articlesList.length ?
            <ul>
                {articlesList.map(article => {
                    return <li key={article.article_id}>
                        <ArticleCard article={article}/>
                    </li>
                })}
            </ul>
            : <p className="notification">There are no articles that match your search!</p>}
        </>
    )
}

export default ArticlesList;