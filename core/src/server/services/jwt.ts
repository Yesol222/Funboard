import jwt from 'jsonwebtoken'
import { configure } from '../common/config'
import { UserJwt, JwtDataFormat, Jwt } from '../interfaces/jwt';

export function makeJwt(data: JwtDataFormat) {
    return jwt.sign(data, configure.JWT_SECRET);
}

export function checkJwt(jwtToken: Jwt): JwtDataFormat {
    return jwt.verify(jwtToken.jwt, configure.JWT_SECRET) as JwtDataFormat;
}

export function decodeJwt(jwtString: string): any {
    return jwt.decode(jwtString);
}