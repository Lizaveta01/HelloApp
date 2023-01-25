import { notification } from '../../utils/notify';
import { ISignInDataResponse, IUpdateResponse } from '../../models/responseData';
import { path, Requests } from '../constants';
import { LocalStorageValue, NotificationType } from '../../constants';

const { TYPE, PATCH, SUCCESSFULL_REQUEST } = Requests;
const { ERROR, SUCCESS } = NotificationType;
const { USER } = LocalStorageValue;

export const updateUser = async (id: string, data: unknown): Promise<IUpdateResponse> => {
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem(USER) || '{}');

    const request = await fetch(`${path.users}/${id}`, {
        method: `${PATCH}`,
        headers: {
            accept: `${TYPE}`,
            'Content-Type': `${TYPE}`,
            Authorization: `${user.token}`,
        },
        body: JSON.stringify(data),
    });

    const responce: IUpdateResponse = await request.json();
    if (request.status !== SUCCESSFULL_REQUEST) {
        notification(ERROR, `${responce.message}`);
    }

    notification(SUCCESS, `${responce.message} ${JSON.stringify(responce.user.username)}`);
    return responce;
};
