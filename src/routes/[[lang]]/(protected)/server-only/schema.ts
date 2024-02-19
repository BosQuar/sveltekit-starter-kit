import { z } from 'zod';
export const formSchemaCreate = z.object({
	title: z.string().min(1),
	content: z.string().min(1)
});
export type FormSchemaCreate = typeof formSchemaCreate;
export const formSchemaDelete = z.object({
	id: z.string()
});
export type FormSchemaDelete = typeof formSchemaDelete;
