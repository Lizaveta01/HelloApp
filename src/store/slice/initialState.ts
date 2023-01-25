import { IUser } from '../../models/responseData';

interface IUserSlice {
    isAuthorized: boolean;
    allUsers: IUser[] | [];
}
export const initialState: IUserSlice = {
    isAuthorized: localStorage.getItem('user') ? true : false,
    allUsers: [],
};
