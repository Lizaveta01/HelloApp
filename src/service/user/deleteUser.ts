/* eslint-disable no-console */
import { ISignInDataResponse } from '../../models/responseData';
import { path, requests } from '../constants';

export const deleteUser = async (userId: string) => {
    const { TYPE, DELETE } = requests;
    const user: ISignInDataResponse = JSON.parse(localStorage.getItem('user') || '{}');

    const request = await fetch(`${path.users}/${userId}`, {
        method: `${DELETE}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `${user.token}`,
        },
    });
    const responce = await request.json();
    console.log('responce', responce);
};
