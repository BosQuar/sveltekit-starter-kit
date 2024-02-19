import { createNote, deleteNote, getNotes } from '$lib/server/template.server';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchemaCreate, formSchemaDelete } from './schema.js';

export const load = async () => {
	const note = async () => {
		const res = await getNotes();

		if (res) {
			return res;
		}

		throw fail(400);
	};

	return {
		notes: await note(),
		formCreate: await superValidate(formSchemaCreate, { id: 'create' }),
		formDelete: await superValidate(formSchemaDelete, { id: 'delete' })
	};
};

export const actions = {
	create: async ({ request, locals }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const content = data.get('content') as string;
		console.log(title);
		console.log(content);

		try {
			await createNote({ title, content }, locals.user.id);
		} catch (error) {
			console.log(error);
		}
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;

		try {
			await deleteNote(parseInt(id, 10));
		} catch (error) {
			console.log(error);
		}
	}
};
