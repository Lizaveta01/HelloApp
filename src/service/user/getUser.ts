import { ISignInDataResponse, IUser } from '../../models/responseData';
import { path, Requests } from '../constants';
import { LocalStorageValue } from '../../constants';

const { TYPE, GET } = Requests;
const { USER } = LocalStorageValue;

export const getUser = async (id: string): Promise<IUser> => {
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem(USER) || '{}');

    const request = await fetch(`${path.users}/${id}`, {
        method: `${GET}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `${user.token}`,
        },
    });
    const responce: IUser = await request.json();
    return responce;
};
