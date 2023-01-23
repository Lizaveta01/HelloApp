import { IUser } from '../../models/responseData';
import { path, requests } from '../constants';

export const updateUser = async (id: string, status: string): Promise<IUser> => {
    const { TYPE, PATCH } = requests;

    const data = {
        status: status,
    };
    const request = await fetch(`${path.users}/${id}`, {
        method: `${PATCH}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    });

    const responce: IUser = await request.json();
    return responce;
};
