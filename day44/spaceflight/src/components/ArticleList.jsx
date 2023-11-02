import React, { useState, useEffect } from 'react';
import Article from './Article';

export default function ArticleList () {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(0);
    const offset = 5;

    useEffect(() => {

        const loadArticles = async () => {

            try {
                const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${offset}&_start=${page * offset}`);
                const data = await response.json();

                setArticles(data);

            } catch (error) {
                console.error("Error while fetching data:", error);
            }
        }

        loadArticles();
        console.log(`Page number ${page} and offset is ${offset}`)
    }, [page]);

    return (
        <div>
            {articles ?
                <>
                    <h3>Latest Articles</h3>

                    {articles.map(article => (
                        <Article key={article.id} {...article} />
                    ))}

                    <div className='buttons-section'>
                        {page > 0 && <button onClick={() => setPage(page - 1)}>Previous</button>}
                        <button onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                </>

                : <h1>Loading mate...</h1>
            }
        </div>
    );
}