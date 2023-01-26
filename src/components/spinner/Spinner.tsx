import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { Wrapper } from './Spinner.styled';

type props = {
    message: string;
};

const Spinner = ({ message }: props) => {
    return (
        <Wrapper>
            <CircularProgress />
            <p>{message}</p>
        </Wrapper>
    );
};
export default Spinner;
