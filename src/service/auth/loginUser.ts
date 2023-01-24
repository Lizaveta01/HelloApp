/* eslint-disable no-console */
import { ISignInData, ISignInDataResponse } from '../../models/responseData';
import { authorizationSwitch, setNotification } from '../../store/slice/userSlice';
import { store } from '../../store/store';
import { path, requests } from '../constants';

export const loginUser = async (data: ISignInData) => {
    const { SUCCESSFULL_REQUEST, TYPE, POST } = requests;
    const { dispatch } = store;

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
        dispatch(setNotification());
        // showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
    } else {
        console.log(responce);
        localStorage.setItem('user', JSON.stringify(responce));
        dispatch(authorizationSwitch());
    }
};
