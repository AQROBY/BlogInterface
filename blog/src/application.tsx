import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Create from './pages/crud/create';
import Posts from './pages/posts';
import Users from './pages/users';

const Application: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="" element={<Posts />} />
                    <Route path="create" element={<Navigate to="/posts/create" replace />} />
                </Route>
                <Route path="posts">
                    <Route path="" element={<Posts />} />
                    <Route path="create" element={<Create />} />
                </Route>
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
