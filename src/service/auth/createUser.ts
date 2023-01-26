import { IRegistrationData, IRegistrationDataResponse } from '../../models/responseData';
import { notification } from '../../utils/notify';
import { path, Requests } from '../constants';
import { loginUser } from './loginUser';
import { NotificationType } from '../../constants';
import { setLoading } from '../../store/slice/userSlice';
import { store } from '../../store/store';

const { TYPE, SUCCESSFULL_REQUEST, POST } = Requests;
const { ERROR } = NotificationType;

export const createUser = async (data: IRegistrationData) => {
    const { dispatch } = store;
    dispatch(setLoading(true));

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
        notification(ERROR, `${responce.message}`);
        return dispatch(setLoading(false));
    }
    loginUser({ id: responce.id, email: data.email, password: data.password });
    return responce;
};
