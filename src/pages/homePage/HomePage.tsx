import React from 'react';
import { TextContainer, Wrapper } from './HomePage.styled';

const HomePage = () => {
    return (
        <Wrapper>
            <TextContainer>
                <h2>Welcome to Hello App</h2>
                <p>
                    Applications that allow you to view the table of all registered users, block and
                    delete them
                </p>
            </TextContainer>
        </Wrapper>
    );
};

export default HomePage;
