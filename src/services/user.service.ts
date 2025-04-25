import httpClient from "src/libraries/httpClient"
export interface IUser{
    id?: number|string;
    email: string;
    username: string
}
export const findAllUsers = async (options: object) => {
    const url = 'users';
    const response = await httpClient.get(url, options);
    return response.data;
}

