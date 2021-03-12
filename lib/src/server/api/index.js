"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
const express_1 = __importDefault(require("express"));
const swagger_spec_express_1 = __importDefault(require("swagger-spec-express"));
class Api {
    constructor(app, routerName) {
        this.app = app;
        this.router = express_1.default.Router();
        swagger_spec_express_1.default.swaggerize(this.router);
        this.app.use(routerName, this.router);
        this.setRoute();
    }
}
exports.Api = Api;
