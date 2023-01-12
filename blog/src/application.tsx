import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CreatePost from './pages/posts/create';
import CreateUser from './pages/users/create';
import EditPost from './pages/posts/edit';
import EditUser from './pages/users/create';
import ReadPost from './pages/posts/read';
import ReadUser from './pages/users/create';
import Posts from './pages/posts';
import Users from './pages/users';
import GlobalStyle from './globalStyles';
import Layout from './components/layout';

const Application: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Posts />} />
                    <Route path="create" element={<Navigate to="/posts/create" replace />} />
                    <Route path="read" element={<Navigate to="/posts/read/:id" replace />} />
                </Route>
                <Route path="posts" element={<Layout />}>
                    <Route path="" element={<Posts />} />
                    <Route path="create" element={<CreatePost />} />
                    <Route path="read/:id" element={<ReadPost />} />
                    <Route path="edit/:id" element={<EditPost />} />
                </Route>
                <Route path="/users" element={<Layout />}>
                    <Route path="" element={<Users />} />
                    <Route path="create" element={<CreateUser />} />
                    <Route path="read/:id" element={<ReadUser />} />
                    <Route path="edit/:id" element={<EditUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
