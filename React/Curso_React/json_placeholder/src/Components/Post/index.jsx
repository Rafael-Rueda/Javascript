export default function Post(props) {
    const {posts} = props;

    return (
        posts.map(post => {
            return (
                <div className="post" key={post.id}>
                    <div className="img">
                        <img src={post.cover} alt={post.title} />
                    </div>
                    <div className="content">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })
    )
}