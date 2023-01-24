/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ToolBar from '../../components/toolBar/ToolBar';
import UsersTable from '../../components/usersTable/UsersTable';
import { useAppSelector } from '../../hooks/storeHooks';

import { ISignInDataResponse } from '../../models/responseData';

import { deleteUser } from '../../service/user/deleteUser';
import { getAllUsers } from '../../service/user/getAllUsers';
import { updateUser } from '../../service/user/updateUser';
import { checkUser } from '../../utils/checkUser';

import { Title, Wrapper } from './UsersPage.styled';

const UsersPage = () => {
    const { allUsers } = useAppSelector((state) => {
        return {
            allUsers: state.userSlice.allUsers,
        };
    });

    const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
    const currentUser: ISignInDataResponse = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(() => {
        getAllUsers();
    }, [allUsers]);

    const handlerDeleteUser = (selectedUsers: string[]) => {
        selectedUsers.map((singleUser: string) => {
            deleteUser(singleUser);
        });

        checkUser(selectedUsers, currentUser.id);
    };

    const blockUser = (usersId: string[]) => {
        const updatedStatus = {
            status: 'blocked',
        };
        usersId.map((singleUser: string) => {
            updateUser(singleUser, updatedStatus)
                .then(() => {
                    // notify('Block successfully!');
                })
                .catch((error) => {
                    // notify(error.message);
                });
        });

        checkUser(selectedUsers, currentUser.id);
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
                }}
                users={allUsers}
            />
        </Wrapper>
    );
};

export default UsersPage;
