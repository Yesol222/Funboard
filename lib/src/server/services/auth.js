"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = require("crypto");
const argon2_1 = __importDefault(require("argon2"));
const user_1 = __importDefault(require("../models/user"));
const config_1 = require("../common/config");
class AuthService {
    constructor(user) {
        this.email = user.email;
        this.name = user.name;
        this.password = user.password;
        this.authority = user.authority;
    }
    async SignUp(userInput) {
        try {
            const salt = crypto_1.randomBytes(32);
            const hashedPassword = await argon2_1.default.hash(userInput.password, { salt });
            const userRecord = await user_1.default.create(Object.assign(Object.assign({}, userInput), { 
                // salt: salt.toString('hex'),
                password: hashedPassword }));
            if (!userRecord) {
                throw new Error('User cannot be created');
            }
            const token = this.generateToken(userInput);
            const user = userRecord.toObject();
            return { user, token };
        }
        catch (e) {
            throw e;
        }
    }
    generateToken(user) {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        return jsonwebtoken_1.default.sign({
            _id: user.email,
            role: user.authority,
            name: user.name,
            exp: exp.getTime() / 1000,
        }, config_1.configure.JWT_SECRET);
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.js.map