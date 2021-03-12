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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const pjson_1 = __importDefault(require("pjson"));
// import { addBody } from "./api/swagger/swagger-body";
// import { addPath } from "./api/swagger/swagger-path";
// import { addModel } from "./api/swagger/swagger-model";
// import { addHeader } from "./api/swagger/swagger-header";
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// swaggerDocument.initialise(app, );
// addBody(swaggerDocument.common.parameters.addBody);
// addPath(swaggerDocument.common.parameters.addPath);
// addModel(swaggerDocument.common.addModel);
// addHeader(swaggerDocument.common.parameters.addHeader);
function makeResultType(result, success) {
    if (!result) {
        result = JSON.stringify(result, null, 2);
    }
    return {
        msg: result,
        isSuccess: success
    };
}
function version() {
    return __awaiter(this, void 0, void 0, function* () {
        return 1.0;
    });
}
app.get('/version', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield version();
    res.send(`api version: ${pjson_1.default.version}`);
}));
// swaggerDocument.compile();
// export const swaggerResult = swaggerDocument.json();
// var result = swaggerDocument.validate();
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument.json()))
exports.default = app;
