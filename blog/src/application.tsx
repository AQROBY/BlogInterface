import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Create from './pages/posts/create';
import Edit from './pages/posts/edit';
import Read from './pages/posts/read';
import Posts from './pages/posts';
import Users from './pages/users';
import GlobalStyle from './globalStyles';

const Application: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/">
                    <Route path="" element={<Posts />} />
                    <Route path="create" element={<Navigate to="/posts/create" replace />} />
                    <Route path="read" element={<Navigate to="/posts/read/:id" replace />} />
                </Route>
                <Route path="posts">
                    <Route path="" element={<Posts />} />
                    <Route path="create" element={<Create />} />
                    <Route path="read/:id" element={<Read />} />
                    <Route path="edit/:id" element={<Edit />} />
                </Route>
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
