import { IUser, UserDocument } from '../interfaces/Iuser';
import mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<mongoose.Document<any, {}>, mongoose.Model<any, any>, undefined>;
declare const _default: mongoose.Model<IUser & UserDocument, {}>;
export default _default;
