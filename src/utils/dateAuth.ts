import { DateTime } from 'luxon';

export function getAuthFetchOptions(data: any) {
    const curTime = DateTime.now().toFormat('MM-dd-yyyy hh:mm:ss');
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, curTime }),
    };
}
