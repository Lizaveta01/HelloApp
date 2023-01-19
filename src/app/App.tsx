import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../pages/404/NotFoundPage';
import HomePage from '../pages/homePage/HomePage';
import SignInPage from '../pages/signInPage/SignInPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import UsersPage from '../pages/usersPage/UsersPage';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

const App = () => {
    return (
        <>
            {' '}
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/signIn" element={<SignInPage />} />
                    <Route path="/signUp" element={<SignUpPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </ThemeProvider>
        </>
    );
};

export default App;
