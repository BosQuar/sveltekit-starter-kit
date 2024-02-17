import { z } from 'zod';
export const formSchema = z.object({
	email: z.string().min(1, 'Must enter a email'),
	password: z.string().min(1, 'Must enter a password')
});
export type FormSchema = typeof formSchema;
