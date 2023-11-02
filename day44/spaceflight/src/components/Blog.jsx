import React, { useState, useEffect } from 'react';
import './blog.css'

export default function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {

            try {
                const response = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
                const data = await response.json();
                setBlogs(data);

            } catch (error) {
                console.error("Error fetching the blogs:", error);
            }
        }

        fetchBlogs();
    }, []);

    return (
        <div className="blog-container">
            <h2>BLOG POSTS</h2>
            {blogs.map(blog => (
                <div key={blog.id} className="blog-item">
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                        <h3>{blog.title}</h3>
                        <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}
