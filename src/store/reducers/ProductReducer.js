const initialState = {
    products: [],
    currProduct: null
}

export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {...state, products: action.products }
        case 'SET_CURR_PRODUCT':
            return {...state, currProduct: action.product }
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map(product => {
                    if (product._id === action.product._id) return action.product;
                    return product;
                })
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => {
                    return product._id !== action.id
                })
            }
        case 'ADD_PRODUCT':
            debugger;
            return {
                ...state,
                products: [...state.products, action.product]
            }
        default:
            return state;
    }
};