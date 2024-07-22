export interface ILoginReq {
    email: string;
    password: string;
}

export interface ILoginRes {
    success: boolean;
    message: string;
    code: number;
    data: string;   
}