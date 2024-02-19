import type { Note } from '@prisma/client';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/client';
import { formSchema } from './schema';

export const ssr = false;

export const load = async () => {
	const note = async (): Promise<Note[]> => {
		const res = await fetch('/api/notes', {
			method: 'GET'
		});

		if (res) {
			return await res.json();
		}

		throw fail(400);
	};

	return { notes: await note(), form: await superValidate(formSchema) };
};
