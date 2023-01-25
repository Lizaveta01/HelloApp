import { authorizationSwitch } from '../store/slice/userSlice';
import { store } from '../store/store';
import { notification } from './notify';
import { NotificationType } from '../constants';

const { INFO } = NotificationType;

export const checkUser = (users: string[], currentUser: string) => {
    const { dispatch } = store;
    // eslint-disable-next-line no-console
    console.log('users', users, currentUser);
    if (users.includes(currentUser)) {
        // eslint-disable-next-line no-console
        console.log('ds');
        notification(INFO, 'You chose yourself. Now you redirect to main page');
        setTimeout(() => {
            dispatch(authorizationSwitch());
        }, 3000);
    }
};
