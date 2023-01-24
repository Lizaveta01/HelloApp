import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import { ButtonContainer, HeaderWrapper, Logo } from './Header.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { authorizationSwitch } from '../../store/slice/userSlice';

export const Header = () => {
    const dispatch = useAppDispatch();
    const { isAuthorized } = useAppSelector((state) => {
        return {
            isAuthorized: state.userSlice.isAuthorized,
        };
    });
    const logout = () => {
        dispatch(authorizationSwitch());
        localStorage.removeItem('user');
    };

    return (
        <HeaderWrapper>
            <NavLink to="/">
                <Logo>HelloApp</Logo>
            </NavLink>
            <ButtonContainer>
                {isAuthorized ? (
                    <React.Fragment>
                        <Button variant="contained" size="small" onClick={() => logout()}>
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
