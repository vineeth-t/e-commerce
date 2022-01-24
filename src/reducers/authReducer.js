export function authReducer(state, { type, payload }) {
    switch (type) {
        case 'SET_USER_NAME':
            return { ...state, userName: payload }
        case 'SET_PASSWORD':
            return { ...state, password: payload }
        case 'LOGIN':
            return {
                ...state, login: true,
                userName: payload.fname,
                token: payload.token
            }
        case 'LOGOUT':
            return { ...state, login: false, userName: '', password: '', token: '' }
        case 'SET_USER_DETAILS':
            return { ...state, name: payload.firstname + payload.lastname, emailId: payload.username }
        default:
            return { ...state }
    }
}