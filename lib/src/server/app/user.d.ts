import { User as RestUser } from '../rest/user';
export declare class User implements RestUser {
    email: string;
    name: string;
    password: string;
    authority: boolean;
    constructor(user: RestUser);
}
