/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ToolBar from '../../components/toolBar/ToolBar';
import UsersTable from '../../components/usersTable/UsersTable';

import { ISignInDataResponse, IUser } from '../../models/responseData';

import { deleteUser } from '../../service/user/deleteUser';
import { getAllUsers } from '../../service/user/getAllUsers';
import { updateUser } from '../../service/user/updateUser';

import { Title, Wrapper } from './UsersPage.styled';

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[] | []>([]);
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const navigate = useNavigate();
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(() => {
        if (user) {
            onRequest();
        }
    });

    const onRequest = () => {
        getAllUsers().then((users) => setUsers(users));
    };

    const handlerDeleteUser = (usersId: string[]) => {
        usersId.map((singleUser: string) => {
            deleteUser(singleUser);
        });

        checkUser(usersId);
    };

    function checkUser(users: string[]) {
        // console.log('users', users, 'you', user.id);
        if (users.includes(user.id)) {
            console.log('has your id');
            navigate('/');
        }
    }
    const blockUser = (usersId: string[]) => {
        const updatedStatus = {
            status: 'blocked',
        };
        usersId.map((singleUser: string) => {
            updateUser(singleUser, updatedStatus);
        });

        // checkUser(usersId);
    };

    const unblockUser = (usersId: string[]) => {
        const updatedStatus = {
            status: 'active',
        };
        usersId.map((singleUser: string) => {
            updateUser(singleUser, updatedStatus);
        });
    };

    return (
        <Wrapper>
            <Title>Users</Title>
            <ToolBar
                deleteUser={handlerDeleteUser}
                blockUser={blockUser}
                unblockUser={unblockUser}
                users={selectedUsers}
            />
            <UsersTable
                getUsers={(users) => {
                    setSelectedUsers(users);
                    console.log('selected', selectedUsers);
                }}
                users={users}
            />
        </Wrapper>
    );
};

export default UsersPage;
