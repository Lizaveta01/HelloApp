import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorizationSwitch: (state) => {
            state.isAuthorized = !state.isAuthorized;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch, setUser, setUsers } = actions;
export default reducer;
