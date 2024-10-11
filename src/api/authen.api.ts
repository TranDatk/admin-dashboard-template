import axios, { AxiosError } from "axios";
import axiosInstance from "./axios.config";


export const loginApi = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post<Token>(`/login`, {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        const errors = error as Error | AxiosError;
        if (axios.isAxiosError(errors)) {
            throw new Error(errors.response?.data?.message);
        }
        throw new Error('An error occurred while logging in');
    }
};

export const getUser = async (): Promise<User> => {
    try {
        const response = await axiosInstance.get<User>(`/user/me`);
        return response.data;
    } catch (error) {
        const errors = error as Error | AxiosError;
        if (axios.isAxiosError(errors)) {
            throw new Error(errors.response?.data?.message);
        }
        throw error;
    }
};