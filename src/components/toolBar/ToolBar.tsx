import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BlockIcon from '@mui/icons-material/Block';
import FaceIcon from '@mui/icons-material/Face';
import { Wrapper } from './ToolBar.styled';

const ToolBar = () => {
    return (
        <Wrapper>
            <Tooltip title="Block">
                <IconButton>
                    <BlockIcon color="primary" />
                </IconButton>
            </Tooltip>
            <Tooltip title="Unblock">
                <IconButton>
                    <FaceIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </Wrapper>
    );
};

export default ToolBar;
