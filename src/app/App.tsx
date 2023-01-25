import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NotFoundPage from '../pages/404/NotFoundPage';
import SignInPage from '../pages/signInPage/SignInPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import UsersPage from '../pages/usersPage/UsersPage';
import { Header } from '../components/header/Header';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { useAppSelector } from '../hooks/storeHooks';
import { PrivateRoute } from '../utils/CustomPrivateRoutes';

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
                        path="/"
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
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/signUp" element={<SignInPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <ToastContainer position="bottom-right" autoClose={2000} />
            </ThemeProvider>
        </>
    );
};

export default App;
