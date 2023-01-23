import { path, requests } from '../constants';

export const deleteUser = async (id: string) => {
    const { TYPE, DELETE } = requests;

    const request = await fetch(`${path.users}/${id}`, {
        method: `${DELETE}`,
        headers: {
            accept: `${TYPE}`,
            Authorization: `${localStorage.getItem('token')}`,
        },
    });
};
