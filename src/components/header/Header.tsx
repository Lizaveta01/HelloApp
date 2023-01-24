import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ButtonContainer, HeaderWrapper, Logo } from './Header.styled';

export const Header = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const logout = () => {
        // eslint-disable-next-line no-console
        console.log('click');
        localStorage.setItem('user', '');
    };
    return (
        <HeaderWrapper>
            <Logo>HelloApp</Logo>
            <ButtonContainer>
                {/* {isAuthorized ? ( */}
                {/* <React.Fragment>
                    
                </React.Fragment> */}
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                        logout();
                    }}
                >
                    Log Out
                </Button>
                {/* <button onClick={funck}>Log Out</button> */}
                {/* ) : ( */}
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
                {/* )} */}
            </ButtonContainer>
        </HeaderWrapper>
    );
};
