import { IUser } from '../../models/responseData';

interface IUserSlice {
    isAuthorized: boolean;
    isLoading: boolean;
    allUsers: IUser[] | [];
}
export const initialState: IUserSlice = {
    isAuthorized: localStorage.getItem('user') ? true : false,
    allUsers: [],
    isLoading: false,
};
