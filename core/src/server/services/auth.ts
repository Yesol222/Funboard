import { User } from '../interfaces/user'
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import argon2 from 'argon2';
import user from '../models/user';
import {configure as config} from '../common/config';
import {findOneOrCreate} from './db';
export default class AuthService implements User{

    email : string;
    name : string;
    password : string;
    authority : boolean;
    
    constructor(user: User){
        this.email = user.email;
        this.name = user.name;
        this.password = user.password;
        this.authority = user.authority
    }
    
    public async SignUp(userInput :User) : Promise<{user:User; token: string}>{
        try{
            const salt = randomBytes(32);
            const hashedPassword = await argon2.hash(userInput.password, {salt});
            
            const userRecord = await findOneOrCreate(userInput.email, userInput, hashedPassword);

            const token = this.generateToken(userInput);
            const user = userRecord.toObject();
        return { user, token };
        } catch (e) {
            throw e;
        }
    }

    private generateToken(user:User){
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate()+60);

        return jwt.sign(
            {
                _id: user.email,
                role:user.authority,
                name:user.name,
                exp:exp.getTime()/1000,
            },
            config.JWT_SECRET
        );
    }

}
