"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(user) {
        this.authority = user.authority;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
}
exports.User = User;
