"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthApi = void 0;
const _1 = require(".");
const auth_1 = __importDefault(require("../services/auth"));
class AuthApi extends _1.Api {
    constructor(app) {
        super(app, '/signup');
    }
    setRoute() {
        this.router.post('/signup', async (req, res) => {
            try {
                let user1 = req.body;
                //instance 생성 후에 함수 호출
                const authService = new auth_1.default(user1);
                const { user, token } = await authService.SignUp(req.body);
                return res.status(201).json({ user, token });
            }
            catch (err) {
                res.status(400);
                res.send(err);
            }
        });
    }
}
exports.AuthApi = AuthApi;
//# sourceMappingURL=auth.js.map