import { User } from '../interfaces/user';
export default class AuthService implements User {
    email: string;
    name: string;
    password: string;
    authority: boolean;
    constructor(user: User);
    SignUp(userInput: User): Promise<{
        user: User;
        token: string;
    }>;
    private generateToken;
}
