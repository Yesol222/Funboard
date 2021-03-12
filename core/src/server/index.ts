import expressApp from "./app";
import {RegisterApi} from './api/Register';
import { JwtApi } from './api/jwt';

new RegisterApi(expressApp);
new JwtApi(expressApp);


export const app = expressApp;