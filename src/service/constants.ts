export enum Requests {
    TYPE = 'application/json',
    SUCCESSFULL_REQUEST = 200,
    WARNING_MESSAGE_DURATION = 5000,
    SHORT_WARNING_MESSAGE_DURATION = 2000,
    DEFAULT__WARNING_MESSAGE = 'Internal error',
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}

// export const url = 'https://two6656.onrender.com';
export const url = 'http://localhost:4000';

export const path = {
    signup: `${url}/auth/signup`,
    signin: `${url}/auth/signin`,
    users: `${url}/users`,
};

export enum Errors {
    BAD_REQUEST = 400,
    INVALID_TOKEN = 403,
    NOT_FOUND_USER = 404,
}
