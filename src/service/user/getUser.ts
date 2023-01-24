import { ISignInDataResponse, IUser } from '../../models/responseData';
import { path, requests } from '../constants';

export const getUser = async (id: string): Promise<IUser> => {
    const { TYPE, GET } = requests;
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem('user') || '{}');

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
