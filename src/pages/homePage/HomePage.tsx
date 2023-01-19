import React from 'react';
import { ButtonContainer, Title, Wrapper } from './HomePage.styled';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <Wrapper>
            <Title>Welcome to Hello App</Title>
            <ButtonContainer>
                <NavLink to="signIn">
                    <Button variant="contained">Sign In</Button>{' '}
                </NavLink>
                <NavLink to="signUp">
                    <Button variant="contained">Sign Up</Button>
                </NavLink>
            </ButtonContainer>
        </Wrapper>
    );
};

export default HomePage;
