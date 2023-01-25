import { ISignInData, ISignInDataResponse } from '../../models/responseData';
import { authorizationSwitch } from '../../store/slice/userSlice';
import { store } from '../../store/store';
import { notification } from '../../utils/notify';
import { path, Requests } from '../constants';
import { LocalStorageValue, NotificationType } from '../../constants';

const { SUCCESSFULL_REQUEST, TYPE, POST } = Requests;
const { ERROR } = NotificationType;
const { USER } = LocalStorageValue;

export const loginUser = async (data: ISignInData) => {
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
        return notification(ERROR, `${responce.message}`);
    }
    localStorage.setItem(USER, JSON.stringify(responce));
    dispatch(authorizationSwitch());
};
