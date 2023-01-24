import { ISignInDataResponse, IUser } from '../../models/responseData';
import { setAllUsers } from '../../store/slice/userSlice';
import { store } from '../../store/store';
import { path, requests } from '../constants';

export const getAllUsers = async (): Promise<IUser[]> => {
    const { TYPE, GET } = requests;
    const { dispatch } = store;
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem('user') || '{}');

    const request = await fetch(`${path.users}`, {
        method: `${GET}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `${user.token}`,
        },
    });

    const responce: IUser[] = await request.json();
    dispatch(setAllUsers(responce));
    return responce;
};
