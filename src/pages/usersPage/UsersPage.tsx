import React from 'react';
import ToolBar from '../../components/toolBar/ToolBar';
import UsersTable from '../../components/usersTable/UsersTable';

import { Title, Wrapper } from './UsersPage.styled';

const UsersPage = () => {
    return (
        <Wrapper>
            <Title>Users</Title>
            <ToolBar />
            <UsersTable />
        </Wrapper>
    );
};

export default UsersPage;
