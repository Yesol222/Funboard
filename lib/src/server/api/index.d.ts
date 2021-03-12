import { Express, Router } from 'express-serve-static-core';
export declare abstract class Api {
    app: Express;
    router: Router;
    constructor(app: Express, routerName: string);
    abstract setRoute(): void;
}
