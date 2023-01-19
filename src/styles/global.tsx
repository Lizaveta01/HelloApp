import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Colors } from './constants';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    body{
        font-family: 'Helvetica', 'Arial', sans-serif;
        color: ${Colors.BLACK};
    }
    a {
        text-decoration: none;
    }
`;
