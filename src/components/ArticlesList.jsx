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
            : <p className="notification">Something went wrong!</p>}
        </>
    )
}

export default ArticlesList;