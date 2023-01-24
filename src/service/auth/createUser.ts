/* eslint-disable no-console */
import { IRegistrationData, IRegistrationDataResponse } from '../../models/responseData';
import { path, requests } from '../constants';
import { loginUser } from './loginUser';

export const createUser = async (data: IRegistrationData): Promise<IRegistrationDataResponse> => {
    const { TYPE, SUCCESSFULL_REQUEST, POST } = requests;
    const request = await fetch(`${path.signup}`, {
        method: `${POST}`,
        headers: {
            Accept: `${TYPE}`,
            'Content-Type': `${TYPE}`,
        },
        body: JSON.stringify(data),
    });

    const responce: IRegistrationDataResponse = await request.json();

    if (request.status !== SUCCESSFULL_REQUEST) {
        // eslint-disable-next-line no-console
        console.log(`Error ${responce?.statusCode}: ${responce.message}`);
        throw new Error(`Error ${responce?.statusCode}: ${responce.message}`);
        // showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
    } else {
        loginUser({ id: responce.id, email: data.email, password: data.password });
        return responce;
    }
};
