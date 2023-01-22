import { ISignInData, ISignInDataResponse } from '../../models/responseData';
import { store } from '../../store/store';
import { authorizationSwitch, setUser } from '../../store/userSlice/userSlice';
import { setValueToCookie } from '../../utils/cookie/setValueToCookie';
import { path, requests } from '../constants';

export const loginUser = async (data: ISignInData) => {
    const { dispatch } = store;
    const { SUCCESSFULL_REQUEST, TYPE, POST } = requests;
    // dispatch(setLoadingState('loading'));
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
        dispatch(authorizationSwitch());
        dispatch(setUser(responce.email));
        setValueToCookie(responce.token);
        // setValueToCookie(responce.token);
        // updateStateAndLocalData(data);
    }
    // dispatch(setLoadingState('loaded'));
};
