import { ISignInDataResponse } from '../models/responseData';
import { deleteUser } from '../service/user/deleteUser';
import { getAllUsers } from '../service/user/getAllUsers';
import { updateUser } from '../service/user/updateUser';
import { checkUser } from './checkUser';
import { Operations, Status } from '../constants';
import { LocalStorageValue } from '../constants';

const { BLOCK, UNBLOCK } = Operations;
const { BLOCKED, ACTIVE } = Status;
const { USER } = LocalStorageValue;

export const setUserOperation = (type: string, selectedUsers: string[]) => {
    const currentUser: ISignInDataResponse = JSON.parse(localStorage.getItem(USER) || '{}');
    if (type !== UNBLOCK) {
        checkUser(selectedUsers, currentUser.id);
    }

    switch (type) {
        case BLOCK: {
            const updatedStatus = {
                status: BLOCKED,
            };
            selectedUsers.map((singleUser: string) => {
                updateUser(singleUser, updatedStatus);
            });
            break;
        }
        case UNBLOCK: {
            const updatedStatus = {
                status: ACTIVE,
            };
            selectedUsers.map((singleUser: string) => {
                updateUser(singleUser, updatedStatus);
            });
            break;
        }
        default: {
            selectedUsers.map((singleUser: string) => {
                deleteUser(singleUser);
            });
            break;
        }
    }
    getAllUsers();
};
