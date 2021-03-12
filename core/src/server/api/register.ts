import {Express} from 'express-serve-static-core'
import {Api} from '.'
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { User } from '../app/user';
import { connect } from "../../common/connection";

export class RegisterApi extends Api{

    constructor(app: Express){
        super(app, '/register');
    }
        setRoute() {
            (<any>this.router.post('', async (req, res) => {
                try {
                    let body = req.body;
                    let user = new User(body);
                    let users = [ user.email, user.name, user.password];
                    console.log(users);
                    const conn = await connect();
                    let tmp = [ body ];
                    console.log(tmp);
                    await conn.query('INSERT INTO users SET ?', function(err:Error, tmp:Object, fields:Object){
                        if(err) console.log('query is not executed');
                        else res.render('list.ejs',{list:users});
                    });
                    //시발 오류
                    // await conn.query('INSERT INTO users SET ?', function (err, users, fields){
                    //     if(err) console.log('query is not executed');
                    //     else res.render('list.ejs',{list:users});
                    // });

                    // connection.query('INSERT INTO users SET ?', users, (error, result, fields) =>{
                    //     if(error){
                    //         console.log('mysql connection error : '+error);
                            
                    //     }else{
                    //         console.log('user register success');
                    //     }
                    // });
                    res.status(200);

                } catch (err) {
                    res.status(400);
                    res.send(err);
                }
            }));
    }
}