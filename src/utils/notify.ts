import { toast } from 'react-toastify';
import { NotificationType } from '../constants';

const { ERROR, SUCCESS } = NotificationType;

export const notification = (type: string, text: string) => {
    switch (type) {
        case SUCCESS:
            return toast.success(text);
        case ERROR:
            return toast.error(text);
        default:
            return toast.info(text);
    }
};
