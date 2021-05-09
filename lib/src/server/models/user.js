"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
// import {findOneOrCreate} from "../services/db";
const mongoose_1 = __importDefault(require("mongoose"));
let UserModel;
exports.UserSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
// UserSchema.statics.findOneOrCreate = findOneOrCreate;
// export interface UserDocument extends User, Document {
//     setLastUpdated: (this: UserDocument) => Promise<void>;
//     sameLastName: (this: UserDocument) => Promise<Document[]>;
//   }
exports.default = UserModel = mongoose_1.default.model('User', exports.UserSchema);
//# sourceMappingURL=user.js.map