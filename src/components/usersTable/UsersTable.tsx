import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getAllUsers } from '../../service/user/getAllUsers';
import { columns } from './dataForTable';
import { IUser } from '../../models/responseData';

const UsersTable = () => {
    const [users, setUsers] = useState<IUser[] | []>([]);

    useEffect(() => onRequest(), []);

    const onRequest = () => {
        getAllUsers().then((users) => setUsers(users));
    };

    return (
        <Box sx={{ height: 400, width: '70%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
};

export default UsersTable;
