import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import UsersPage from '../pages/usersPage/UsersPage';

import { GlobalStyle } from '../styles/global';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/" element={<UsersPage />} />
            </Routes>
        </>
    );
};

export default App;
