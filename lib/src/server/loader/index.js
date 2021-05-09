"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("./mongoose"));
exports.default = async () => {
    const mongoConnection = await mongoose_1.default();
    const userModel = {
        name: 'userModel',
        // Notice the require syntax and the '.default'
        model: require('../models/user').default,
    };
};
//# sourceMappingURL=index.js.map