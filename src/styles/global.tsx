import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Colors } from './constants';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    body{
        font-family: 'Roboto', sans-serif;
        color: ${Colors.BLACK};
        /* background-color: ${Colors.BLACK}; */
    }
`;
