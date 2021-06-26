import axios from "axios";

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://www.dglee.site'; // Prod.
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5500'; // Dev.
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// 캐싱 방지
axios.defaults.headers.get['Cache-Control'] = 'no-cache';
axios.defaults.headers.get['Pragma'] = 'no-cache';

const axiosService = axios.create({
    // baseURL: `https://www.dglee.site:8080`, // Prod.
    baseURL: `http://localhost:8080`, // Dev.
    withCredentials: false
});

function registUser(data) {
    return axiosService.post(`/user/add`, data);
}

function verifyUser(token) {
    return axiosService.get(`/user/verify?token=` + token);
}

function login(data) {
    return axiosService.post(`/login`, data);
}

export { registUser };

export { verifyUser };

export { login };