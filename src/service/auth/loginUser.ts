import { ISignInData, ISignInDataResponse } from '../../models/responseData';
import { path, requests } from '../constants';

export const loginUser = async (data: ISignInData) => {
    const { SUCCESSFULL_REQUEST, TYPE, POST } = requests;
    const request = await fetch(`${path.signin}`, {
        method: `${POST}`,
        headers: {
            Accept: `${TYPE}`,
            'Content-Type': `${TYPE}`,
        },
        body: JSON.stringify(data),
    });

    const responce: ISignInDataResponse = await request.json();

    if (request.status !== SUCCESSFULL_REQUEST) {
        // eslint-disable-next-line no-console
        console.log(`Error ${responce.statusCode}: ${responce.message}`);
        // showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
    } else {
        localStorage.setItem('token', responce.token);
        localStorage.setItem('email', responce.email);
    }
};
