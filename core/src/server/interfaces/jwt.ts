export type JwtDataFormat = UserJwt;

export interface Jwt {
    jwt: string
}

export interface UserJwt {
    email: string
    name: string
    iat?: number
}