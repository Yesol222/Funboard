import { User } from '../interfaces/user';
import { UserModel } from "../models/user";
import { UserDocument } from "../interfaces/user";
export declare function findOneOrCreate(this: UserModel, email: string, user: User, hashedPassword: string): Promise<UserDocument>;
