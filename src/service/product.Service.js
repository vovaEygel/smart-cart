import httpService from './http.service.js'

const baseUrl = 'product'

export const ProductService = {
    query,
    getById,
    remove,
    save
}

function query() {
    return httpService.get(baseUrl)
        // return httpService.get(baseUrl, criteria)
}

function getById(id) {
    return httpService.get(`${baseUrl}/${id}`)
}

function remove(id) {
    return httpService.delete(`${baseUrl}/${id}`)
}

function save(product) {
    if (product._id) {
        return httpService.put(`${baseUrl}/${product._id}`, product)
    } else {
        return httpService.post(`${baseUrl}`, product)
    }
}