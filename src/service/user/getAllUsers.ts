import { ISignInDataResponse, IUser } from '../../models/responseData';
import { setAllUsers, setLoading } from '../../store/slice/userSlice';
import { store } from '../../store/store';
import { path, Requests } from '../constants';
import { LocalStorageValue } from '../../constants';

const { TYPE, GET } = Requests;
const { USER } = LocalStorageValue;

export const getAllUsers = async (): Promise<IUser[]> => {
    const { dispatch } = store;
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem(USER) || '{}');
    dispatch(setLoading(true));

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
