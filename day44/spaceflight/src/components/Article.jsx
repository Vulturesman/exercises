import { Link } from "react-router-dom"

export default function Article ({ title, url, imageUrl, publishedAt, summary, id }) {

    return (
        <div className="article">

            <h2>{title}</h2>
            <img src={imageUrl} alt={title} />
            <p>{summary}</p>
            <p><strong>Published at:</strong> {new Date(publishedAt).toLocaleDateString()}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">External Link</a> <span>---</span>  
            <Link to={`/articles/${id}`}> Detail Link</Link>
        </div>
    )
}