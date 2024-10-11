export { };

declare global {

    interface BackendResponse<T> {
        data: T;
        message: string;
    }

    interface User {
        email: string;
        expires_at: string;
        role: string;
        isLocked: boolean;
        server_id: number;
        _id: string;
        created_at: string;
        updated_at: string;
    }

    interface Token {
        type: string;
        token: string;
        expires_at: string;
        refresh_token: {
            token: string;
            expires_at: string;
        };
    }
}