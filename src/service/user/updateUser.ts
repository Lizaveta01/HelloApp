import { ISignInDataResponse, IUser } from '../../models/responseData';
import { path, requests } from '../constants';

export const updateUser = async (id: string, data: unknown): Promise<IUser> => {
    const { TYPE, PATCH, SUCCESSFULL_REQUEST } = requests;
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem('user') || '{}');

    const request = await fetch(`${path.users}/${id}`, {
        method: `${PATCH}`,
        headers: {
            accept: `${TYPE}`,
            'Content-Type': `${TYPE}`,
            Authorization: `${user.token}`,
        },
        body: JSON.stringify(data),
    });

    if (request.status === SUCCESSFULL_REQUEST) {
        throw new Error(`Error ${request.status}`);
    }
    const responce: IUser = await request.json();
    return responce;
};
