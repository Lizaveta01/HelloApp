import { IRegistrationData, IRegistredUser } from '../../models/responseData';
// import { store } from '../../store/store';
import { path, requests } from '../constants';
import { loginUser } from './signIn';

export const createUser = async (data: IRegistrationData): Promise<IRegistredUser> => {
    // const { dispatch } = store;
    const { TYPE, SUCCESSFULL_REQUEST, POST } = requests;
    // dispatch(setLoadingState('loading'));
    const request = await fetch(`${path.signup}`, {
        method: `${POST}`,
        headers: {
            Accept: `${TYPE}`,
            'Content-Type': `${TYPE}`,
        },
        body: JSON.stringify(data),
    });

    const responce: IRegistredUser = await request.json();

    if (request.status !== SUCCESSFULL_REQUEST) {
        // eslint-disable-next-line no-console
        console.log(`Error ${responce?.statusCode}: ${responce.message}`);
        // showWarningMessage(`Error ${responce.statusCode}: ${responce.message}`);
        // dispatch(setLoadingState('loaded'));
    } else {
        loginUser({ email: data.email, password: data.password });
    }
    return responce;
};
