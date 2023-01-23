import { IUser } from '../../models/responseData';
import { path, requests } from '../constants';

export const getUser = async (id: string): Promise<IUser> => {
    const { TYPE, GET } = requests;

    const request = await fetch(`${path.users}/${id}`, {
        method: `${GET}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `${localStorage.getItem('token')}`,
        },
    });
    const responce: IUser = await request.json();
    return responce;
};
