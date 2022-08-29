import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import data from '../mock-posts.json';

export default function Posts() {
    interface Post {
        id: number;
        title: string;
        contents: string;
        created_at: string;
        modified_at: string;
    }

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
                        {post.contents}
                    </div>
                ))
            )}
        </div>
    );
}
