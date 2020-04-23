import Axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'production' ?
    '/api/' :
    '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
});


export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}


async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        })
        return res.data;
    } catch (err) {
        console.log(err)
            // if (err.response.status === 401) {
            //     console.log('error')
            // }
    }
}

// import router from '@/router'
// import store from '@/store'

// const BASE_URL = process.env.NODE_ENV === 'production' ?
//     '/api/' :
//     '//localhost:3000/api/'


// import Axios from 'axios';
// var axios = Axios.create({
//     withCredentials: true
// });

// export const httpService = {
//     get(endpoint, data) {
//         return ajax(endpoint, 'GET', data)
//     },
//     post(endpoint, data) {
//         return ajax(endpoint, 'POST', data)
//     },
//     put(endpoint, data) {
//         return ajax(endpoint, 'PUT', data)
//     },
//     delete(endpoint, data) {
//         return ajax(endpoint, 'DELETE', data)
//     }
// }


// async function ajax(endpoint, method = 'get', data = null) {
//     try {
//         var config = {
//             url: `${BASE_URL}${endpoint}`,
//             method
//         }
//         if (method === 'get' || method === 'GET') config.params = { data }
//         else config.data = data

//         const res = await axios(config)
//         return res.data;
//     } catch (err) {
//         if (err.response.status === 401) {
//             router.push('/login');
//             throw new Error('Unautonticated')
//         }
//     }
// }