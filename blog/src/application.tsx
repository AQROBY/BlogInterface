import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from './pages/posts';
import Users from './pages/users';

const Application: React.FunctionComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};

export default Application;
