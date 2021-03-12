"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtApi = void 0;
const _1 = require(".");
const jwt_1 = require("../app/jwt");
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
        this.router.get('/register', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const jwtString = req.header('Authorization') || '';
                yield jwt_1.checkJwt({
                    jwt: jwtString
                });
                res.send('');
            }
            catch (err) {
                res.status(400);
                res.send(err);
            }
        }));
    }
}
exports.JwtApi = JwtApi;
