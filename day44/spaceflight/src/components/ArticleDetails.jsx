import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ArticleDetails() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {

        const loadArticleDetails = async () => {
            try {
                const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id}`);
                const data = await response.json();
                setArticle(data);

            } catch (error) {
                console.error("Error fetching the article details:", error);
            }
        }

        loadArticleDetails();
    }, [id]);

    if (!article) return <p>Loading...</p>;

    return (
        <div>
            <h2>{article.title}</h2>
            <div className="Link">
                    <Link to="/">Home</Link>
            </div>
            <img src={article.imageUrl} alt={article.title} />
            <p>{article.summary}</p>
            <p><strong>Published on:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
    );
}
