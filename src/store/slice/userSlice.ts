import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorizationSwitch: (state) => {
            state.isAuthorized = !state.isAuthorized;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        setNotification: (state) => {
            state.isNotification = !state.isNotification;
        },
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
            state.isLoading = !state.isLoading;
        },
        setUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch, setLoading, setNotification, setAllUsers, setUser } = actions;
export default reducer;
