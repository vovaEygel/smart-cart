// import httpService from "./httpService.js";
import utilService from './util.service'
export default {
    query,
    getById,
    remove,
    add,
    update
};
var gusers = [
    { id: utilService.makeId(), name: 'mike', },
    { id: utilService.makeId(), name: 'anny', },
    { id: utilService.makeId(), name: 'dillon' },
    { id: utilService.makeId(), name: 'david' },
    { id: utilService.makeId(), name: 'avi', }
]

function query(filterBy) {
    // var queryParams = new URLSearchParams();
    // if (filterBy) {
    //     for (let key in filterBy) {
    //         if (Array.isArray(filterBy[key])) {
    //             filterBy[key].forEach(value => {
    //                 queryParams.append(key, value);
    //             })
    //         }
    //         queryParams.append(key, filterBy[key]);
    //     }
    // }
    // return await httpService.get(`user?${queryParams}`);
    return gusers;
}

async function getById(id) {
    // return await httpService.get(`user/${id}`);
}

async function remove(id) {
    // return await httpService.delete(`user/${id}`, id);
}

async function add(user) {
    // return await httpService.post(`user`, user)
}

async function update(user) {
    // return await httpService.put(`user/${user._id}`, user)
}