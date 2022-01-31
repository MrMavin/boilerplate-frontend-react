import Axios from 'axios';

export const axios = Axios.create({
    baseURL: process.env.BACKEND_BASE_URL || 'http://localhost:8080/api/v1',
});

export async function processRequest(fn, path, data = {}) {
    try {
        const result = await fn(path, data);

        if (result.status === 200) {
            return result.data;
        }

        return false;
    } catch (e) {
        const status = e.response.status;

        if (status === 404) {
            return 404;
        }

        return false;
    }
}
