import { Express } from 'express-serve-static-core';
import { Api } from '.';
export declare class RegisterApi extends Api {
    constructor(app: Express);
    setRoute(): void;
}
