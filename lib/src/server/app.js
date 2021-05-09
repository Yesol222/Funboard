"use strict";
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
async function version() {
    return 1.0;
}
app.get('/version', async (req, res) => {
    const result = await version();
    res.send(`api version: ${pjson_1.default.version}`);
});
// swaggerDocument.compile();
// export const swaggerResult = swaggerDocument.json();
// var result = swaggerDocument.validate();
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument.json()))
exports.default = app;
//# sourceMappingURL=app.js.map