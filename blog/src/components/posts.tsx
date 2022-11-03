import PostRepo from '../services/repo';

const Posts = () => {
    const repo = PostRepo.getInstance();

    function handleDate(date: Date) {
        return date.toLocaleString();
    }

    return (
        <div>
            {repo.size() === 0 ? (
                <p>No posts found!</p>
            ) : (
                repo.findAll().map((post: any) => (
                    <div className="border mt-3 mb-4 p-3 bgl" key={post.id}>
                        <div className="row p-2">
                            <div>
                                <h2>{post.title}</h2>
                                <div className="contents">
                                    <h6>{post.contents}</h6>
                                </div>
                                <p>Created at: {handleDate(new Date(post.created_at))}</p>
                                <p>Modified at: {handleDate(new Date(post.modified_at))}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Posts;
