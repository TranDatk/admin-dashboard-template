import axios, { AxiosError } from "axios";
import axiosInstance from "./axios.config";

export const fetchUsers = async (): Promise<User[]> => {
    try {
        const response = await axiosInstance.get(`/admin/users`);
        return response.data;
    } catch (error) {
        const errors = error as Error | AxiosError;
        if (axios.isAxiosError(errors)) {
            throw new Error(errors.response?.data?.message);
        }
        throw error;
    }
};