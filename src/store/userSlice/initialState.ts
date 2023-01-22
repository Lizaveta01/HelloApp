interface IUserSlice {
    isAuthorized: boolean;
    user: string | null;
}
export const initialState: IUserSlice = {
    isAuthorized: false,
    user: null,
};
