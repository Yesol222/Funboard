import {User as RestUser } from '../rest/user'
import { Jwt } from '../rest/jwt';

export class User implements RestUser{
    email : string;
    name : string;
    password : string;
    authority : boolean;
    
    constructor(user: RestUser){
        this.authority = user.authority;
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }

    // async registerUser(): Promise<Jwt> {
    //     //db에 사용자 정보를 저장한다
    //     //저장된 jwt를 리턴한다
        
    //     return result as Jwt;
    // }
    
}