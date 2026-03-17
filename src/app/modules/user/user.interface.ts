export interface IUser {
    name: string;
    email: string,
    password: string,
    country?: string,
    role?: 'EVENT_MANAGER' | 'NORMAL_USER',
}