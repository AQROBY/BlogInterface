import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    );
};

export default Application;
