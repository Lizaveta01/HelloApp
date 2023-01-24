/* eslint-disable no-console */
import { ISignInData, ISignInDataResponse } from '../../models/responseData';
import { path, requests } from '../constants';
import { DateTime } from 'luxon';

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
        console.log(responce);
        const loginDate = DateTime.now().toLocaleString();

        localStorage.setItem('user', JSON.stringify(responce));
    }
};
