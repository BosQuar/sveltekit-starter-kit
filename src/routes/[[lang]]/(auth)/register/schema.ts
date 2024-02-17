import { z } from 'zod';
export const formSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	surname: z.string().min(1, 'Surname is required'),
	email: z.string().min(1, 'Email is required'),
	password: z.string().min(1, 'Password is required'),
	confirmPassword: z.string().min(1, 'Confirming password is required')
});
export type FormSchema = typeof formSchema;
