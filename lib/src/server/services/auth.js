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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = require("crypto");
const argon2_1 = __importDefault(require("argon2"));
const config_1 = require("../common/config");
const db_1 = require("./db");
class AuthService {
    constructor(user) {
        this.email = user.email;
        this.name = user.name;
        this.password = user.password;
        this.authority = user.authority;
    }
    SignUp(userInput) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const salt = crypto_1.randomBytes(32);
                const hashedPassword = yield argon2_1.default.hash(userInput.password, { salt });
                const userRecord = yield db_1.findOneOrCreate(userInput.email, userInput, hashedPassword);
                const token = this.generateToken(userInput);
                const user = userRecord.toObject();
                return { user, token };
            }
            catch (e) {
                throw e;
            }
        });
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
