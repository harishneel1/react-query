import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Posts() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();


    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://localhost:4000/posts");
            setPosts(response.data);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    const handleClick = (postId) => {
        navigate(`/posts/${postId}`);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    if (isLoading) {
        return <div>Page is loading...</div>
    }

    if (isError) {
        return <div>Error has occurred...</div>
    }

    return (
        <div className="post-list">
            {posts.map(post => (
                <div onClick={() => handleClick(post.id)} key={post.id} className="post-item">
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-body">{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;
