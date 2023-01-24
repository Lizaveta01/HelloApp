import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 250 },
    {
        field: 'username',
        headerName: 'Name',
        width: 200,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 220,
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
        width: 200,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 100,
        editable: true,
    },
];
