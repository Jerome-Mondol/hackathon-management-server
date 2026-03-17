import config from "../../../config/index.js";
import { IUser } from "./user.interface.js";
import { User } from "./user.model.js";
import bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
    const saltRounds = parseInt(config.salt_rounds);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export const createUserInDB = async (userData: IUser) => {
    const { name, email, password, country, role } = userData;

    // check for user duplication
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        const duplicateUserError = new Error('User with this email already exists') as Error & { statusCode?: number };
        duplicateUserError.statusCode = 409;
        throw duplicateUserError;
    }

    // hash the password before saving to database
    const hashedPassword = await hashPassword(password);

    // create new user
    const newUser = User.create({
        name,
        password: hashedPassword,
        email,
        country,
        role,
    })
    
    // exclude pass from the return 
    return newUser.then(user => {
        const userObj = user.toObject();
        delete userObj.password;
        return userObj;
    })
}