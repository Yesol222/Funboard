import { IUser, UserDocument} from '../interfaces/Iuser';
// import {findOneOrCreate} from "../services/db";
import mongoose from 'mongoose';

let UserModel;

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },

    password: String,

    salt: String,

    authority: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true },
);

// UserSchema.statics.findOneOrCreate = findOneOrCreate;

// export interface UserDocument extends User, Document {
//     setLastUpdated: (this: UserDocument) => Promise<void>;
//     sameLastName: (this: UserDocument) => Promise<Document[]>;
//   }


export default UserModel = mongoose.model<IUser & UserDocument>('User', UserSchema);
