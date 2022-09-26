import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/crud/create';
import Posts from './pages/posts';
import Users from './pages/users';

const Application: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="posts">
                <Route path="" element={<Posts />} />
                <Route path="create" element={<Create />} />
            </Route>
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};

export default Application;
