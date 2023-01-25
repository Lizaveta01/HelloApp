import styled from 'styled-components';

import { Colors } from '../../styles/constants';

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 30px;
    box-shadow: 0 -6px 10px 5px rgba(0, 0, 0, 0.5);
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    a {
        font-size: 20px;
        color: ${Colors.BLUE};
        transition: all 0.2s ease-out;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const Logo = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.BLUE};
`;
