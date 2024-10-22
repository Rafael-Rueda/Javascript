import React from 'react';
import Post from '../../Components/PostInformation';

const PostsPage = () => {
    const posts = [
        { title: 'First Post', content: 'This is the content of the first post.' },
        { title: 'Second Post', content: 'This is the content of the second post.' },
    ];

    return (
        <div className="posts-page">
            <h1>Posts</h1>
            {posts.map((post, index) => (
                <Post key={index} title={post.title} content={post.content} />
            ))}
        </div>
    );
};

export default PostsPage;