export interface IRegistrationData {
    username: string;
    email: string;
    password: string;
}
export interface IRegistrationDataResponse extends IUser {
    message: string;
}
export interface ISignInData {
    id: string;
    email: string;
    password: string;

}
export interface ISignInDataResponse {
    id: string;
    token: string;
    message?: string;
}

export interface IUser {
    id: string;
    username: string;
    email: string;
    registerDate: string;
    lastLoginDate: string;
    status: string;
}

export interface IUpdateResponse {
    message: string;
    user: IUser;
}
