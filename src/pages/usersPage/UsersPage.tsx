/* eslint-disable no-console */
import React, { useCallback, useEffect, useState } from 'react';

import ToolBar from '../../components/toolBar/ToolBar';
import UsersTable from '../../components/usersTable/UsersTable';
import { useAppSelector } from '../../hooks/storeHooks';

import { ISignInDataResponse } from '../../models/responseData';
import { getAllUsers } from '../../service/user/getAllUsers';
import { TextContainer, Wrapper } from './UsersPage.styled';
import { LocalStorageValue } from '../../constants';

const { USER } = LocalStorageValue;

const UsersPage = () => {
    const { allUsers } = useAppSelector((state) => {
        return {
            allUsers: state.userSlice.allUsers,
        };
    });
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const currentUser: ISignInDataResponse = JSON.parse(localStorage.getItem(USER) || '{}');

    const fetching = useCallback(() => {
        getAllUsers();
    }, [allUsers]);

    useEffect(() => {
        fetching();
    }, [fetching]);

    return (
        <Wrapper>
            <TextContainer>
                <h2>Users</h2>
                <p>Current user: {currentUser.id}</p>
            </TextContainer>

            <ToolBar users={selectedUsers} />
            <UsersTable
                getUsers={(users) => {
                    setSelectedUsers(users);
                }}
                users={allUsers}
            />
        </Wrapper>
    );
};

export default UsersPage;
