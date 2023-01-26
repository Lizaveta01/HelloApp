import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorizationSwitch: (state) => {
            state.isAuthorized = !state.isAuthorized;
        },
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch, setAllUsers, setLoading } = actions;
export default reducer;
