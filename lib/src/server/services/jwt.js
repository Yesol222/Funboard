"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeJwt = exports.checkJwt = exports.makeJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../common/config");
function makeJwt(data) {
    return jsonwebtoken_1.default.sign(data, config_1.configure.JWT_SECRET);
}
exports.makeJwt = makeJwt;
function checkJwt(jwtToken) {
    return jsonwebtoken_1.default.verify(jwtToken.jwt, config_1.configure.JWT_SECRET);
}
exports.checkJwt = checkJwt;
function decodeJwt(jwtString) {
    return jsonwebtoken_1.default.decode(jwtString);
}
exports.decodeJwt = decodeJwt;
//# sourceMappingURL=jwt.js.map