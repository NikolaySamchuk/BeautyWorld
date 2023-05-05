import axios from 'axios';
import { API_PATH } from '../constants';
import TokenService from './TokenService';
import PubSub from './PubSub';

const httpClient = axios.create({
    baseURL: API_PATH,
    withCredentials: false
});

httpClient.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        const hasAccessToken = TokenService.getToken();

        if (error.response.status === 401 && error.config && !error.config._isRetry && Boolean(hasAccessToken)) {
            originalRequest._isRetry = true;

            try {
                await axios.get(`${API_PATH}/refresh`, { withCredentials: true });
                return httpClient.request(originalRequest);
            } catch (e) {
                PubSub.emit('logout');
                throw e;
            }
        }

        throw error;
    }
);

type Params = Record<string, string | undefined>;

export class HttpService {
    private baseApi: string = '';

    constructor(baseApiPath: string = API_PATH) {
        this.baseApi = baseApiPath;
    }

    get baseHeaders() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TokenService.getToken()}`
        };
    }

    async get(path: string, params?: Params) {
        const response = await httpClient.get(
            `${this.baseApi}/${path}`,
            { params, headers: this.baseHeaders }
        );

        return response.data;
    }

    async getOnSearchName(path: string, name: string, params?: Params) {
        const response = await httpClient.get(
            `${this.baseApi}/${path}?search=${name}`,
            { params, headers: this.baseHeaders }
        );

        return response.data;
    }

    async getOnSearchStatus(path: string, name: string, params?: Params) {
        const response = await httpClient.get(
            `${this.baseApi}/${path}?status=${name}`,
            { params, headers: this.baseHeaders }
        );

        return response.data;
    }

    async getOnSearchDate(path: string, visitDateFrom: string, visitDateTo: string, params?: Params) {
        const response = await httpClient.get(
            `${this.baseApi}/${path}?from=${visitDateFrom}&to=${visitDateTo}`,
            { params, headers: this.baseHeaders }
        );

        return response.data;
    }

    async post<T>(path: string, data?: T, params?: Params) {
        const response = await httpClient.post(
            `${this.baseApi}/${path}`, data,
            { params, headers: this.baseHeaders }
        );

        return response.data;
    }

    async delete(path: string, id: number) {
        const response = await httpClient.delete(
            `${this.baseApi}/${path}${id}`,
            { headers: this.baseHeaders }
        );
        
        return response.status;
    }

    async patch<T>(path: string, id: number,  data?: T) {
        const response = await httpClient.patch(
            `${this.baseApi}/${path}${id}`, data,
            { headers: this.baseHeaders }
        );

        return response.data;
    }
}