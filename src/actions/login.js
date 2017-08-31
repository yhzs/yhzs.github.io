export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(username, password) {
    return {
        type: LOGIN,
        username,
        password
    }
}

export function logout() {
    return{
        type:LOGOUT
    }
}