export interface ApiResponse<T> {
    message?: string;
    data: T;
    pagination?: any;
}

export interface ApiErrorResponse {
    code: string;
    message: string;
    detail?: any;
    status: number;
}