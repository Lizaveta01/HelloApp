import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 100px;
    gap: 40px;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    h2 {
        font-size: 40px;
        font-weight: 400;
    }
    p {
        font-size: 20px;
        font-weight: 400;
    }
`;
