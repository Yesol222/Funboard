import { User } from '../interfaces/user';
import UserModel  from "../models/user";
import { UserDocument } from "../interfaces/user";



export async function findOneOrCreate(
    this: UserModel,
    email : string,
    user : User,
    hashedPassword : string,
  ): Promise<UserDocument> {
    const record = await this.findOne({ email });
    if (record) {
      return record;
    } else {
      return this.create({
          ...user,
          password: hashedPassword,
      });
    }
  }

//   export async function setLastUpdated(this: UserDocument): Promise<void> {
//     const now = new Date();
//     if (!this.lastUpdated || this.lastUpdated < now) {
//       this.lastUpdated = now;
//       await this.save();
//     }
//   }