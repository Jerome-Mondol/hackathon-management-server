import { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String },
    role: { type: String, enum: ['EVENT_MANAGER', 'NORMAL_USER'], default: 'NORMAL_USER' },
}, { timestamps: true });
export const User = model('User', userSchema);
