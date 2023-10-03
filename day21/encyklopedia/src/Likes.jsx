import { useState } from 'react';
 
export const Likes = (props) => {
    const [likes, setLikes] = useState(0);
 
    const handleLike = () => {
        setLikes(likes + 1);
    }
 
    return (
        <>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>I Like</button>
        </>
    )
}