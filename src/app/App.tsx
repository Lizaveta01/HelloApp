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
import { PrivateRoute } from '../utils/PrivateRoutes';
import { Header } from '../components/header/Header';

const App = () => {
    // const isAuthorized = !!localStorage.getItem('token');
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Routes>
                    {/* <Route
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
                    /> */}
                    {/* <Route
                        path="/users"
                        element={
                            <PrivateRoute user={isAuthorized} redirectPath="/">
                                <UsersPage />
                            </PrivateRoute>
                        }
                    /> */}
                    <Route path="/signIn" element={<SignInPage />} />
                    <Route path="/signUp" element={<SignUpPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </ThemeProvider>
        </>
    );
};

export default App;
