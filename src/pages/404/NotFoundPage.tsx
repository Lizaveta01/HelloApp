import React from 'react';
import { Wrapper } from './NotFoundPage.styled';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Lottie from 'lottie-react';
import notFound from '../../assets/404.json';

const NotFoundPage = () => {
    return (
        <Wrapper>
            <Lottie animationData={notFound} loop={true} style={{ height: '50vh' }} />
            <NavLink to="/">
                <Button variant="contained">Back home</Button>
            </NavLink>
        </Wrapper>
    );
};

export default NotFoundPage;
