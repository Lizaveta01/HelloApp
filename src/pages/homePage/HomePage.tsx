import React from 'react';
import Lottie from 'lottie-react';

import { TextContainer, Wrapper } from './HomePage.styled';
import tableImg from '../../assets/table.json';

const HomePage = () => {
    return (
        <Wrapper>
            <TextContainer>
                <h2>Welcome to Hello App</h2>
                <p>
                    Application table allow you to view the table of all registered users, block and
                    delete them
                </p>
            </TextContainer>
            <Lottie animationData={tableImg} loop={true} style={{ height: '50vh' }} />
        </Wrapper>
    );
};

export default HomePage;
