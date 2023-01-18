import React from 'react';

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
        editable: true,
    },
    {
        field: 'lastLoginTime',
        headerName: 'Last login time',
        width: 180,
        editable: true,
    },
    {
        field: 'registrationTime',
        headerName: 'Registration time',
        width: 180,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 110,
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        name: 'Snow',
        email: 'Snow@gmail.com',
        lastLoginTime: '11:00 22-01-2023',
        registrationTime: '22-01-2023',
        status: 'active',
    },
    {
        id: 2,
        name: 'Snow',
        email: 'Snow@gmail.com',
        lastLoginTime: '11:00 22-01-2023',
        registrationTime: '22-01-2023',
        status: 'active',
    },
    {
        id: 3,
        name: 'Snow',
        email: 'Snow@gmail.com',
        lastLoginTime: '11:00 22-01-2023',
        registrationTime: '22-01-2023',
        status: 'active',
    },
];

const UsersTable = () => {
    return (
        <Box sx={{ height: 400, width: '70%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
};

export default UsersTable;
