const initialState = {
    msg: 'about page text',
    counter: 17
}

export default function AppReducer(state = initialState, action) {
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state;
    }
}