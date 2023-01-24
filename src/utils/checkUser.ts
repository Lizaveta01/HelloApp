import { getAllUsers } from '../service/user/getAllUsers';
import { authorizationSwitch } from '../store/slice/userSlice';
import { store } from '../store/store';

export const checkUser = (users: string[], currentUser: string) => {
    const { dispatch } = store;
    if (users.includes(currentUser)) {
        dispatch(authorizationSwitch());
    } else {
        getAllUsers();
    }
};
