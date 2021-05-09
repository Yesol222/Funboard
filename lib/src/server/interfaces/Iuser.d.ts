import { Document } from 'mongoose';
export interface IUser {
    email: string;
    name: string;
    password: string;
    authority: boolean;
}
export interface IUserInput {
    email: string;
    name: string;
    password: string;
    authority: boolean;
}
export interface UserDocument extends IUser, Document {
}
