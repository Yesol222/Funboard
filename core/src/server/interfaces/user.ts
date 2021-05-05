import { Document, Model} from 'mongoose';

export interface User{
    email: string
    name : string
    password : string
    authority: boolean
}

export interface UserInput{
    email: string
    name : string
    password : string
    authority : boolean

}

export interface UserDocument extends User, Document {}