export const deleteCookie = (value: string) => {
    document.cookie = `HELLOAPP_USER_TOKEN=${value}; max-age=0`;
};
