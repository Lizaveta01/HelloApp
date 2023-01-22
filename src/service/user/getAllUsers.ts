import { IUser } from '../../models/responseData';
import { store } from '../../store/store';
import { setUsers } from '../../store/userSlice/userSlice';
import { getCookie } from '../../utils/cookie/getCookie';
import { path, requests } from '../constants';

export const getAllUsers = async (): Promise<IUser[]> => {
    const { TYPE, GET } = requests;
    const { dispatch } = store;

    const request = await fetch(`${path.users}`, {
        method: `${GET}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `Bearer ${getCookie('HELLOAPP_USER_TOKEN')}`,
        },
    });

    const responce: IUser[] = await request.json();
    dispatch(setUsers(responce));
    return responce;
};
