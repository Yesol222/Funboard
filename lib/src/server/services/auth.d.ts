import { IUser } from '../interfaces/Iuser';
export default class AuthService implements IUser {
    email: string;
    name: string;
    password: string;
    authority: boolean;
    constructor(user: IUser);
    SignUp(userInput: IUser): Promise<{
        user: IUser;
        token: string;
    }>;
    private generateToken;
}
