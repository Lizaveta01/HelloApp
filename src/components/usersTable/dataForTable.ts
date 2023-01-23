import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'username',
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
        field: 'registerDate',
        headerName: 'Registration time',
        width: 180,
        editable: true,
    },
    {
        field: 'lastLoginDate',
        headerName: 'Last login time',
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
