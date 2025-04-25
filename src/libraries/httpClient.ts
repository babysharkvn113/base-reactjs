import appConfigs from '@configs/app.configs';
import axios from 'axios';

const httpClient = axios.create({
    baseURL: appConfigs.apiBaseUrl,
    timeout: 5000,
    maxRedirects:3,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // withCredentials: true,
    // xsrfCookieName: 'XSRF-TOKEN',
    // xsrfHeaderName: 'X-XSRF-TOKEN',
});

export default httpClient;