"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtApi = void 0;
const _1 = require(".");
const jwt_1 = require("../services/jwt");
class JwtApi extends _1.Api {
    constructor(app) {
        super(app, '/jwt');
    }
    setRoute() {
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
                await jwt_1.checkJwt({
                    jwt: jwtString
                });
                res.send('');
            }
            catch (err) {
                res.status(400);
                res.send(err);
            }
        });
    }
}
exports.JwtApi = JwtApi;
//# sourceMappingURL=jwt.js.map