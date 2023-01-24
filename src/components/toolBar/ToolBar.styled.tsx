import styled from 'styled-components';
import { Colors } from '../../styles/constants';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;
export const ToolsButtom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border: 2px solid ${Colors.GRAY};
    border-radius: 8px;
`;
