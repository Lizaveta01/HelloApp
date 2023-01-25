import { authorizationSwitch } from '../store/slice/userSlice';
import { store } from '../store/store';
import { notification } from './notify';
import { NotificationType } from '../constants';

const { INFO } = NotificationType;

export const checkUser = (users: string[], currentUser: string) => {
    const { dispatch } = store;
    if (users.includes(currentUser)) {
        notification(INFO, 'You chose yourself. Now you redirect to main page');
        setTimeout(() => {
            dispatch(authorizationSwitch());
        }, 3000);
    }
};
