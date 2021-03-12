import express, { Router } from "express"
import bodyParser from "body-parser"
import cors from 'cors'
import pjson from 'pjson'
import swaggerUi from "swagger-ui-express";
import swaggerDocument, { IInitializeOptions } from 'swagger-spec-express'
// import { addBody } from "./api/swagger/swagger-body";
// import { addPath } from "./api/swagger/swagger-path";
// import { addModel } from "./api/swagger/swagger-model";
// import { addHeader } from "./api/swagger/swagger-header";


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// swaggerDocument.initialise(app, );

// addBody(swaggerDocument.common.parameters.addBody);
// addPath(swaggerDocument.common.parameters.addPath);
// addModel(swaggerDocument.common.addModel);
// addHeader(swaggerDocument.common.parameters.addHeader);

function makeResultType(result: object | string, success: boolean) {
    if (!(result as string)) {

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

(<any>app.get('/version', async (req, res) => {
    const result = await version();

    res.send(`api version: ${pjson.version}`);
}))


// swaggerDocument.compile();
// export const swaggerResult = swaggerDocument.json();

// var result = swaggerDocument.validate();

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument.json()))

export default app;