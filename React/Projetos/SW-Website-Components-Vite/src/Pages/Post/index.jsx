import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostInformation from '../../Components/PostInformation';
import TextTools from '../../Components/TextTools';
import Comments from '../../Components/Comments';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <PostInformation title={post.title} content={post.body} />
            <Comments />
        </>
    );
};

export default Post;