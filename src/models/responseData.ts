export interface IRegistrationData {
    username: string;
    email: string;
    password: string;
}
export interface ISignInData {
    email: string;
    password: string;
}
export interface ISignInDataResponse {
    email: string;
    token: string;
    statusCode?: number;
    message?: string;
}

export interface IRegistredUser {
    message: string;
    username: string;
    email: string;
    statusCode?: number;
}

export interface IUser {
    id: string;
    username: string;
    email: string;
    registerDate: string;
    lastLoginDate: string;
    status: string;
}
