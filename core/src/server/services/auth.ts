import { IUser } from '../interfaces/Iuser'
import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';
import argon2 from 'argon2';
import UserModel from '../models/user';
import {configure as config} from '../common/config';

export default class AuthService implements IUser{

    email : string;
    name : string;
    password : string;
    authority : boolean;
    
    constructor(user: IUser){
        this.email = user.email;
        this.name = user.name;
        this.password = user.password;
        this.authority = user.authority
    }
    
    async SignUp(userInput :IUser) : Promise<{user:IUser; token: string}>{
        try{
            const salt = randomBytes(32);
            const hashedPassword = await argon2.hash(userInput.password, {salt});
            
            const userRecord = await UserModel.create({
                ...userInput,
                // salt: salt.toString('hex'),
                password: hashedPassword,
            })

            if (!userRecord) {
                throw new Error('User cannot be created');
            }

            const token = this.generateToken(userInput);
            const user = userRecord.toObject();
        return { user, token };
        } catch (e) {
            throw e;
        }
    }

    private generateToken(user:IUser){
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
