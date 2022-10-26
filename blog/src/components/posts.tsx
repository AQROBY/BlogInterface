import Repo from '../services/repo';
import data from '../mock-posts.json';
import { repoInitialisation } from '../services/repoInitialisation';

const Posts = () => {
    var repo = Repo;
    let asdsa = repo.getAll();
    return (
        <div>
            {repo.length() === 0 ? (
                <p>No posts found!</p>
            ) : (
                repo.getAll().map((post: any) => (
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
