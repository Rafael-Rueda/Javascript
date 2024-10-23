import React, { useState, useEffect } from 'react';
import TextTools from '../TextTools';
import './index.css';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState({ start: 0, end: 10 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/comments?_limit=50')
                .then(response => response.json())
                .then(data => { setComments(data.slice(page.start, page.end)); setAmount(data.length); });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        const handleCommentPagination = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                if (page.end < amount) {
                    setPage((previous) => { return { start: previous.start, end: previous.end + 10 } });
                }
            }

        }

        window.addEventListener('scroll', handleCommentPagination);

        return () => window.removeEventListener('scroll', handleCommentPagination);
    }, [amount, page]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="comments-container">
                <h2 className="comments-title">Comentários</h2>
                <ul className="comments-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-item">{comment.body}</li>
                    ))}
                </ul>
            </div>
            <TextTools />
        </>
    );
};

export default Comments;