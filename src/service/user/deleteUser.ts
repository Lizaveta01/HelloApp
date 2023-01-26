import { notification } from '../../utils/notify';
import { ISignInDataResponse } from '../../models/responseData';
import { path, Requests } from '../constants';
import { LocalStorageValue, NotificationType } from '../../constants';
import { setLoading } from '../../store/slice/userSlice';
import { store } from '../../store/store';

const { TYPE, DELETE, SUCCESSFULL_REQUEST } = Requests;
const { ERROR, SUCCESS } = NotificationType;
const { USER } = LocalStorageValue;

export const deleteUser = async (userId: string) => {
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem(USER) || '{}');
    const { dispatch } = store;
    dispatch(setLoading(true));

    const request = await fetch(`${path.users}/${userId}`, {
        method: `${DELETE}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `${user.token}`,
        },
    });
    const responce = await request.json();
    if (request.status !== SUCCESSFULL_REQUEST) {
        notification(ERROR, `${responce.message}`);
    }
    notification(SUCCESS, `${responce.message}`);
};
