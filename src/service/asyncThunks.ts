import { createAsyncThunk } from '@reduxjs/toolkit';

import { IRegistrationData, ISignInData } from '../models/responseData';
import { loginUser } from './auth/signIn';
import { createUser } from './auth/signUp';

export const registrationUser = createAsyncThunk('user/signup', (data: IRegistrationData) => {
    return createUser(data);
});

export const loginUserThunk = createAsyncThunk('user/signin', (data: ISignInData) => {
    return loginUser(data);
});
