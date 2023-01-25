import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotFoundPage from '../pages/404/NotFoundPage';
import HomePage from '../pages/homePage/HomePage';
import SignInPage from '../pages/signInPage/SignInPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import UsersPage from '../pages/usersPage/UsersPage';
import { Header } from '../components/header/Header';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { PrivateRoute } from '../utils/privateRoutes';
import { useAppSelector } from '../hooks/storeHooks';

const App = () => {
    const { isAuthorized } = useAppSelector((state) => {
        return {
            isAuthorized: state.userSlice.isAuthorized,
        };
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route
                        path="signIn"
                        element={
                            <PrivateRoute user={!isAuthorized} redirectPath="/users">
                                <SignInPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="signUp"
                        element={
                            <PrivateRoute user={!isAuthorized} redirectPath="/users">
                                <SignUpPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <PrivateRoute user={isAuthorized} redirectPath="/">
                                <UsersPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ToastContainer position="bottom-right" autoClose={2000} />
            </ThemeProvider>
        </>
    );
};

export default App;
