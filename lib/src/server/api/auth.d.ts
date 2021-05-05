import { Express } from 'express-serve-static-core';
import { Api } from '.';
export declare class AuthApi extends Api {
    constructor(app: Express);
    setRoute(): void;
}
