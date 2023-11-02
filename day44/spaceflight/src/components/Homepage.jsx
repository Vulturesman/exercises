import ArticleList from "./ArticleList"
import Blog from "./Blog"

export default function Homepage() {
    return (
         <div className="homepage-container">
            <Blog />

            <div className="content-container">
                <h2>Welcome to SpaceFlight Homepage</h2>
                <ArticleList />
            </div>
        </div>
    )
}