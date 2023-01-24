export interface IRegistrationData {
    username: string;
    email: string;
    password: string;
}
export interface IRegistrationDataResponse {
    id: string;
    username: string;
    email: string;
    registerDate: string;
    lastLoginDate: string;
    message: string;
    statusCode?: number;
}
export interface ISignInData {
    id: string;
    email: string;
    password: string;
    statusCode?: number;
}
export interface ISignInDataResponse {
    id: string;
    token: string;
    statusCode?: number;
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
