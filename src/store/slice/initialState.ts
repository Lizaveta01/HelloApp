import { IUser } from '../../models/responseData';

interface IUserSlice {
    isAuthorized: boolean;
    isLoading: boolean;
    isNotification: boolean;
    allUsers: IUser[] | [];
    currentUser: IUser | null;
}
export const initialState: IUserSlice = {
    isAuthorized: localStorage.getItem('user') ? true : false,
    isLoading: true,
    isNotification: false,
    allUsers: [],
    currentUser: null,
};
