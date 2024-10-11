import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { getUser, loginApi } from '../api/authen.api';

// Định nghĩa kiểu dữ liệu cho AuthContext
interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const response = await loginApi(email, password);

        // Save the token to localStorage
        localStorage.setItem('token', response?.token);
        localStorage.setItem('refresh_token', response?.refresh_token?.token);
        setUser({ email, expires_at: '', role: '' });
    };

    const fetchUser = async () => {
        try {
            const user = await getUser();
            setUser(user);
        } catch (error) {
            console.error('Failed to fetch user', (error as Error)?.message);
            logout();
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook để sử dụng AuthContext
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context) {
        return context;
    }
    throw new Error('useAuth must be used inside AuthProvider');
};