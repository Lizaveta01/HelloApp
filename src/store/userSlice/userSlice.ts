import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUser } from '../../service/auth/signIn';
import { initialState } from './initialState';

export const loginUserThunk = createAsyncThunk('user/login', (data: ILogInData) => {
    return loginUser(data);
});

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
    },
});

const { actions, reducer } = userSlice;
export const { authorizationSwitch, setUser } = actions;
export default reducer;
