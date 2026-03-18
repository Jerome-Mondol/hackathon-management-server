import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().trim().min(1, 'Name is required'),
    email: z.email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    country: z.string().trim().min(1, 'Country cannot be empty').optional(),
    role: z.enum(['EVENT_MANAGER', 'NORMAL_USER']).optional(),
}).strict();

