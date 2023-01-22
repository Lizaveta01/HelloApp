import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ButtonContainer, HeaderWrapper, Logo } from './Header.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { authorizationSwitch } from '../../store/userSlice/userSlice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const { isAuthorized } = useAppSelector((state) => {
        return {
            isAuthorized: state.userSlice.isAuthorized,
        };
    });

    return (
        <HeaderWrapper>
            <Logo>HelloApp</Logo>
            <ButtonContainer>
                {isAuthorized ? (
                    <React.Fragment>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => dispatch(authorizationSwitch())}
                        >
                            Log Out
                        </Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <NavLink to="signIn">
                            <Button variant="contained" size="small">
                                Sign In
                            </Button>
                        </NavLink>
                        <NavLink to="signUp">
                            <Button variant="contained" size="small">
                                Sign Up
                            </Button>
                        </NavLink>
                    </React.Fragment>
                )}
            </ButtonContainer>
        </HeaderWrapper>
    );
};
