import { ProductService } from '../../service/product.Service.js'



// LIST
export function loadProducts(filterBy) {
    return async dispatch => {
        const products = await ProductService.query();
        dispatch({ type: 'SET_PRODUCTS', products })
    }
}

// READ
export function getProductById(id) {
    return async dispatch => {
        const product = await ProductService.getProductById(id);
        dispatch({ type: 'SET_CURR_PRODUCT', product })
    }
}

// UPDATE + CREATE
export function saveProduct(product) {
    return async dispatch => {
        const isEdit = !!product._id
        product = await ProductService.saveProduct(product);

        if (isEdit) dispatch({ type: 'UPDATE_PRODUCT', product })
        else dispatch({ type: 'ADD_PRODUCT', product })
        return product;
    }
}
// REMOVE
export function deleteProduct(id) {
    return async dispatch => {
        await ProductService.deleteProduct(id);
        dispatch({ type: 'DELETE_PRODUCT', id })
    }
}
// export const ProductActions = {
// module.exports = {
// export default {
//     loadProducts,
//     getProductById,
//     saveProduct,
//     deleteProduct
// }