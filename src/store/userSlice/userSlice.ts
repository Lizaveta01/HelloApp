import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authorizationSwitch: (state) => {
            state.isAuthorized = !state.isAuthorized;
        },
    },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch } = actions;
export default reducer;
