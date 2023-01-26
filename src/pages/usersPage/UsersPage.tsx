import React, { useEffect, useState } from 'react';

import ToolBar from '../../components/toolBar/ToolBar';
import UsersTable from '../../components/usersTable/UsersTable';
import { useAppSelector } from '../../hooks/storeHooks';

import { ISignInDataResponse } from '../../models/responseData';
import { getAllUsers } from '../../service/user/getAllUsers';
import { TextContainer, Wrapper } from './UsersPage.styled';
import { LocalStorageValue } from '../../constants';
import Spinner from '../../components/spinner/Spinner';

const { USER } = LocalStorageValue;

const UsersPage = () => {
    const { allUsers, isLoading } = useAppSelector((state) => {
        return {
            allUsers: state.userSlice.allUsers,
            isLoading: state.userSlice.isLoading,
        };
    });
    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const currentUser: ISignInDataResponse = JSON.parse(localStorage.getItem(USER) || '{}');

    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <Wrapper>
            <TextContainer>
                <h2>Users</h2>
                <p>Current user: {currentUser.id}</p>
            </TextContainer>

            <ToolBar users={selectedUsers} />
            {isLoading ? (
                <Spinner message={'Loading users... Please wait'} />
            ) : (
                <UsersTable
                    getUsers={(users) => {
                        setSelectedUsers(users);
                    }}
                    users={allUsers}
                />
            )}
        </Wrapper>
    );
};

export default UsersPage;
