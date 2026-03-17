import { Request, Response } from 'express';
import catchAsync from '../../../utils/catchAsync.js';
import { createUserInDB } from './user.service.js';

// register user controller
export const registerUser = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body;
    const newUser = await createUserInDB(userData);
    
    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: newUser,
    })
});