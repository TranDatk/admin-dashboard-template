import axios from 'axios';

const BE_URL = import.meta.env.VITE_BE_URL;

const axiosInstance = axios.create({
    baseURL: BE_URL, // Thay thế bằng URL API của bạn
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Lấy token từ localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post(`${BE_URL}/refresh-token`, { token: refreshToken });
                const newToken = response.data.token;
                localStorage.setItem('token', newToken);
                localStorage.setItem('refresh_token', response.data.refresh_token.token);
                axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;