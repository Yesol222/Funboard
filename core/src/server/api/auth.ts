import {Express} from 'express-serve-static-core'
import {Api} from '.'
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { User } from "../interfaces/user";
import SignUp  from "../services/auth";

export class AuthApi extends Api{

    constructor(app: Express){
        super(app, '/signup');
    }
        setRoute() {
            (<any>this.router.post('/signup', async (req, res) => {
                try {
                    const { user, token } = await new SignUp(req.body as User);
                    return res.status(201).json({ user, token });

                } catch (err) {
                    res.status(400);
                    res.send(err);
                }
            }));
    }
}