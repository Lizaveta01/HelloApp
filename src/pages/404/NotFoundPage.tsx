import React from 'react';
import { Wrapper } from './NotFoundPage.styled';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <Wrapper>
            <h1>404</h1>
            <h3>Page not found</h3>
            <NavLink to="/">
                <Button variant="contained">Back home</Button>
            </NavLink>
        </Wrapper>
    );
};

export default NotFoundPage;
