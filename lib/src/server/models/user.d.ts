import { User, UserDocument } from '../interfaces/User';
import mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any>;
declare const _default: mongoose.Model<User & UserDocument, {}>;
export default _default;
