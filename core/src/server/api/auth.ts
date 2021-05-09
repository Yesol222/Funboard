import {Express} from 'express-serve-static-core'
import {Api} from '.'
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { IUser } from "../interfaces/Iuser";
import AuthService from '../services/auth';

export class AuthApi extends Api{

    constructor(app: Express){
        super(app, '/signup');
    }
        setRoute() {
            (<any>this.router.post('/signup', async (req, res) => {
                try {
                    let user1 = req.body as IUser
                    //instance 생성 후에 함수 호출
                    const authService = new AuthService(user1);
                    const { user, token } = await authService.SignUp(req.body as IUser);
                    return res.status(201).json({ user, token });

                } catch (err) {
                    res.status(400);
                    res.send(err);
                }
            }));
    }
}