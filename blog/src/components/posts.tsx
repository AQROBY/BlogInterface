import PostRepo from '../services/repo';

const Posts = () => {
    const repo = PostRepo.getInstance();
    let asdsa = PostRepo.findAll();

    function handleDate(date: Date) {}
    return (
        <div>
            {repo.instance.length === 0 ? (
                <p>No posts found!</p>
            ) : (
                repo.findAll().map((post: any) => (
                    <div className="border mt-3 p-3 bgl" key={post.id}>
                        <div className="row p-2">
                            <div>
                                <h2>{post.title}</h2>
                                <h5>{post.contents}</h5>
                                <p>Created at: {post.created_at}</p>
                                <p>Modified at: {post.modified_at}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Posts;
