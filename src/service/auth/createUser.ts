import { IRegistrationData, IRegistrationDataResponse } from '../../models/responseData';
import { notification } from '../../utils/notify';
import { path, Requests } from '../constants';
import { loginUser } from './loginUser';
import { NotificationType } from '../../constants';

const { TYPE, SUCCESSFULL_REQUEST, POST } = Requests;
const { ERROR } = NotificationType;

export const createUser = async (data: IRegistrationData) => {
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
        return notification(ERROR, `${responce.message}`);
    }
    loginUser({ id: responce.id, email: data.email, password: data.password });
    return responce;
};
