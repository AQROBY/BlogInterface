import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Create from './pages/crud/create';
import Posts from './pages/posts';
import Users from './pages/users';

const Application: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<Posts />} />
                <Route path="create" element={<Navigate to="/posts/create" replace />} />
            </Route>
            <Route path="posts">
                <Route path="" element={<Posts />} />
                <Route path="create" element={<Create props={{ entity: 'post' }} />} />
            </Route>
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};

export default Application;
