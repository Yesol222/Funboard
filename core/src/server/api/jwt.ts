import {Express} from 'express-serve-static-core';
import {Api} from ".";
import {checkJwt} from '../services/jwt';
import { checkJwt as Jwt } from '../services/jwt';


export class JwtApi extends Api{
    constructor(app: Express){
        super(app,'/jwt');
    }
    setRoute(){
        // this.router.get('', async(req,res)=>{
        //     try{
        //         const jwtString = req.header('Authorization' || '');
        //         const jwtResult = Jwt({
        //             jwt: jwtString
        //         });
        //         res.json(jwtResult);
        //     } catch(err){
        //         res.status(400);
        //         res.send(err);
        //     }
        // });

        this.router.get('/register', async (req, res) => {
            try {
                const jwtString = req.header('Authorization') || '';
                await checkJwt({
                    jwt: jwtString
                });

                res.send('');
            } catch (err) {
                res.status(400);
                res.send(err);
            }
        });
    }
}