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
exports.AuthApi = void 0;
const _1 = require(".");
const auth_1 = require("../services/auth");
class AuthApi extends _1.Api {
    constructor(app) {
        super(app, '/signup');
    }
    setRoute() {
        this.router.post('/signup', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, token } = yield auth_1.SignUp(req.body);
                return res.status(201).json({ user, token });
            }
            catch (err) {
                res.status(400);
                res.send(err);
            }
        }));
    }
}
exports.AuthApi = AuthApi;
