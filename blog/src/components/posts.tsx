import { Link } from 'react-router-dom';
import PostRepo from '../services/repo';

const Posts = () => {
    const repo = PostRepo.getInstance();

    function handleDate(date: Date) {
        return date.toLocaleString();
    }

    function formatContent(content: string) {
        return content.slice(0, 600) + '...';
    }

    return (
        <div>
            {repo.size() === 0 ? (
                <p>No posts found!</p>
            ) : (
                repo.findAll().map((post: any) => (
                    <div className="border mt-3 mb-4 p-3 bgl" key={post.id}>
                        <div className="row p-3">
                            <Link to={'posts/read/' + post.id} style={{ textDecoration: 'none' }}>
                                <div>
                                    <h2>{post.title}</h2>
                                    <div className="contents mb-3">
                                        <strong>{formatContent(post.contents)}</strong>
                                    </div>
                                    <p>Created at: {handleDate(new Date(post.created_at))}</p>
                                    <p>Modified at: {handleDate(new Date(post.modified_at))}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Posts;
