import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import { DataGrid, GridSelectionModel } from '@mui/x-data-grid';

import { columns } from './constants';
import { IUser } from '../../models/responseData';

type props = {
    getUsers: (users: string[]) => void;
    users: IUser[];
};

const UsersTable = ({ getUsers, users }: props) => {
    const [selectionModel, setSelectionModel] = useState<string[] | GridSelectionModel>([]);

    useEffect(() => {
        getUsers(selectionModel as string[]);
    }, [selectionModel]);

    return (
        <Box sx={{ height: 600, width: '70%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                experimentalFeatures={{ newEditingApi: true }}
                onSelectionModelChange={(newSelectionModel) => setSelectionModel(newSelectionModel)}
                selectionModel={selectionModel}
                checkboxSelection
            />
        </Box>
    );
};

export default UsersTable;
