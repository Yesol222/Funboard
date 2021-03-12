import { JwtDataFormat, Jwt } from '../rest/jwt';
export declare function makeJwt(data: JwtDataFormat): string;
export declare function checkJwt(jwtToken: Jwt): JwtDataFormat;
export declare function decodeJwt(jwtString: string): any;
