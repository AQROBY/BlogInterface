import { useState } from 'react';
import data from '../mock-posts.json';
import Header from './Header';
import Navigation from './Navigation';

const Layout: React.FunctionComponent = () => {
    let dataSorted = data.sort((a, b) => (a.modified_at > b.modified_at ? 1 : -1));
    let dataMapped: { id: number; title: string; contents: string; created_at: string; modified_at: string }[] = dataSorted;
    const [posts, setPosts] = useState(dataMapped);

    return (
        <div>
            <Navigation />
            <div className="main">
                <Header title="Posts" />
            </div>
        </div>
    );
};

export default Layout;
