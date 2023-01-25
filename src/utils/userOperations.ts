import { ISignInDataResponse } from '../models/responseData';
import { deleteUser } from '../service/user/deleteUser';
import { updateUser } from '../service/user/updateUser';
import { checkUser } from './checkUser';
import { Operations, Status } from '../constants';

const { BLOCK, UNBLOCK } = Operations;
const { BLOCKED, ACTIVE } = Status;

const currentUser: ISignInDataResponse = JSON.parse(localStorage.getItem('user') || '{}');

export const setUserOperation = (type: string, selectedUsers: string[]) => {
    if (type !== UNBLOCK) {
        checkUser(selectedUsers, currentUser.id);
    }

    switch (type) {
        case BLOCK: {
            const updatedStatus = {
                status: BLOCKED,
            };
            return selectedUsers.map((singleUser: string) => {
                updateUser(singleUser, updatedStatus);
            });
        }
        case UNBLOCK: {
            const updatedStatus = {
                status: ACTIVE,
            };
            return selectedUsers.map((singleUser: string) => {
                updateUser(singleUser, updatedStatus);
            });
        }
        default: {
            return selectedUsers.map((singleUser: string) => {
                deleteUser(singleUser);
            });
        }
    }
};
