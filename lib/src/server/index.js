"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app_1 = __importDefault(require("./app"));
const Register_1 = require("./api/Register");
const jwt_1 = require("./api/jwt");
new Register_1.RegisterApi(app_1.default);
new jwt_1.JwtApi(app_1.default);
exports.app = app_1.default;
