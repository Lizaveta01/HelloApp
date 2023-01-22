import { IUser } from '../../models/responseData';

interface IUserSlice {
    isAuthorized: boolean;
    user: string | null;
    users: IUser[] | null;
}
export const initialState: IUserSlice = {
    isAuthorized: false,
    user: null,
    users: null,
};
