import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Posts from './pages/posts';
import Users from './pages/users';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}>
                <Route path="posts" element={<Posts />} />
                <Route path="users" element={<Users />} />
            </Route>
        </Routes>
    );
};

export default Application;
