import axios from 'axios';

const instanceAxios = axios.create({
    baseURL: 'https://back-foror.vercel.app/admin/',
    // headers: { 'Content-Type': 'application/json' },
});

export default instanceAxios;
