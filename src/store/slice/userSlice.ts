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
        },
    },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch, setAllUsers } = actions;
export default reducer;
