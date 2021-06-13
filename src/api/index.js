import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://dglee.site';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// 캐싱 방지
axios.defaults.headers.get['Cache-Control'] = 'no-cache';
axios.defaults.headers.get['Pragma'] = 'no-cache';

const axiosService = axios.create({
    baseURL: `https://dglee.site:8080`,
    withCredentials: false
});

function registUser(data) {
    return axiosService.post(`/user/add`, data);
}

function verifyUser(token) {
    return axiosService.get(`/user/verify?token=` + token);
}

export { registUser };

export { verifyUser };