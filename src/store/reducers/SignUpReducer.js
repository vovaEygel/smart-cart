export function registration(state = {}, action) {
    switch (action.type) {
        case 'SIGN_UP_REQUEST':
            return { registering: true };
        case 'SIGN_UP_SUCCESS':
            return {};
        case 'SIGN_UP_FAILURE':
            return {};
        default:
            return state
    }
}