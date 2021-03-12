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
exports.connect = void 0;
const config_1 = require("./config");
const promise_1 = require("mysql2/promise");
// import * as mysql from 'mysql'
// export async function connect(){
//     const connection = mysql.createConnection({
//         host: configure.DB_SERVER_HOST,
//         user: configure.DB_SERVER_USER,
//         port: configure.DB_SERVER_PORT,
//         password: configure.DB_SERVER_PASSWORD,
//         database: configure.DB_SERVER_DATABASE
//     });
//     connection.connect();
// }
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield promise_1.createPool({
            host: config_1.configure.DB_SERVER_HOST,
            user: config_1.configure.DB_SERVER_USER,
            port: config_1.configure.DB_SERVER_PORT,
            password: config_1.configure.DB_SERVER_PASSWORD,
            database: config_1.configure.DB_SERVER_DATABASE
        });
        return connection;
    });
}
exports.connect = connect;
