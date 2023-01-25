import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BlockIcon from '@mui/icons-material/Block';
import FaceIcon from '@mui/icons-material/Face';

import { ToolButtoms, Wrapper } from './ToolBar.styled';
import { setUserOperation } from '../../utils/userOperations';
import { Operations } from '../../constants';

const { BLOCK, UNBLOCK, DELETE } = Operations;

type props = {
    users: string[];
};

const ToolBar = ({ users }: props) => {
    return (
        <Wrapper>
            <h3>Tools for manage</h3>

            <ToolButtoms>
                <Tooltip title="Block">
                    <IconButton
                        onClick={() => {
                            setUserOperation(BLOCK, users);
                        }}
                    >
                        <BlockIcon color="primary" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Unblock">
                    <IconButton
                        onClick={() => {
                            setUserOperation(UNBLOCK, users);
                        }}
                    >
                        <FaceIcon color="primary" id="unblock" />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton
                        onClick={() => {
                            setUserOperation(DELETE, users);
                        }}
                    >
                        <DeleteIcon color="primary" />
                    </IconButton>
                </Tooltip>
            </ToolButtoms>
        </Wrapper>
    );
};

export default ToolBar;
