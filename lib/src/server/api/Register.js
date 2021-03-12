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
exports.RegisterApi = void 0;
const _1 = require(".");
const user_1 = require("../app/user");
const connection_1 = require("../../common/connection");
class RegisterApi extends _1.Api {
    constructor(app) {
        super(app, '/register');
    }
    setRoute() {
        this.router.post('', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let body = req.body;
                let user = new user_1.User(body);
                let users = [user.email, user.name, user.password];
                console.log(users);
                const conn = yield connection_1.connect();
                let tmp = [body];
                console.log(tmp);
                yield conn.query('INSERT INTO users SET ?', function (err, tmp, fields) {
                    if (err)
                        console.log('query is not executed');
                    else
                        res.render('list.ejs', { list: users });
                });
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
            }
            catch (err) {
                res.status(400);
                res.send(err);
            }
        }));
    }
}
exports.RegisterApi = RegisterApi;
