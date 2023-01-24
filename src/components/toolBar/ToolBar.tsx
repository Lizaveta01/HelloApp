/* eslint-disable no-console */
import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BlockIcon from '@mui/icons-material/Block';
import FaceIcon from '@mui/icons-material/Face';
import { ToolsButtom, Wrapper } from './ToolBar.styled';

type props = {
    deleteUser: (usersId: string[]) => void;
    blockUser: (usersId: string[]) => void;
    unblockUser: (usersId: string[]) => void;
    users: string[];
};

const ToolBar = ({ deleteUser, blockUser, unblockUser, users }: props) => {
    return (
        <Wrapper>
            <h3>Tools for manage</h3>
            <ToolsButtom>
                <Tooltip title="Block">
                    <IconButton
                        onClick={() => {
                            blockUser(users);
                            console.log('block');
                        }}
                    >
                        <BlockIcon color="primary" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Unblock">
                    <IconButton
                        onClick={() => {
                            unblockUser(users);
                            console.log('unblock');
                        }}
                    >
                        <FaceIcon color="primary" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton
                        onClick={() => {
                            deleteUser(users);
                            console.log('delete');
                        }}
                    >
                        <DeleteIcon color="primary" />
                    </IconButton>
                </Tooltip>
            </ToolsButtom>
        </Wrapper>
    );
};

export default ToolBar;
