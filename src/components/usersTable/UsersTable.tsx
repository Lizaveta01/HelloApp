import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { DataGrid, GridSelectionModel } from '@mui/x-data-grid';
import { getAllUsers } from '../../service/user/getAllUsers';
import { columns } from './dataForTable';
import { IUser } from '../../models/responseData';

type props = {
    getUsers: (users: string[]) => void;
    users: IUser[];
};

const UsersTable = ({ getUsers, users }: props) => {
    const [selectionModel, setSelectionModel] = useState<string[] | GridSelectionModel>([]);

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(selectionModel);
        getUsers(selectionModel as string[]);
    }, [selectionModel]);

    return (
        <Box sx={{ height: 400, width: '70%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                experimentalFeatures={{ newEditingApi: true }}
                onSelectionModelChange={(newSelectionModel) => setSelectionModel(newSelectionModel)}
                selectionModel={selectionModel}
                checkboxSelection
            />
        </Box>
    );
};

export default UsersTable;
