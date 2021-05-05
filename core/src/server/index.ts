import expressApp from "./app";
import {AuthApi} from './api/auth';
import { JwtApi } from './api/jwt';

new AuthApi(expressApp);
new JwtApi(expressApp);


export const app = expressApp;