import React, { useEffect, useState } from 'react';
import data from '../mock-posts.json';

export default function Posts() {
    let dataSorted = data.sort((a, b) => (a.modified_at > b.modified_at ? 1 : -1));
    let dataMapped: { id: number; title: string; contents: string; created_at: string; modified_at: string }[] = dataSorted;

    const [posts, setPosts] = useState(dataMapped);
    return (
        <div>
            {posts.length === 0 ? (
                <p>No posts found!</p>
            ) : (
                posts.map((post) => (
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
}
