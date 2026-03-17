import { Schema, model } from "mongoose";
import { IUser } from "./user.interface.js";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String },
    role: { type: String, enum: ['EVENT_MANAGER', 'NORMAL_USER'], default: 'NORMAL_USER' },
},
{ timestamps: true }
)

export const User = model<IUser>('User', userSchema);