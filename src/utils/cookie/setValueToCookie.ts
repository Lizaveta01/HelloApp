export const setValueToCookie = (value: string) => {
    document.cookie = `HELLOAPP_USER_TOKEN=${value}; max-age=${3600 * 12}`;
};
