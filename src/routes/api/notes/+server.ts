import { createNote, deleteNote, getNotes } from '$lib/server/template.server';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const notes = await getNotes();

	return json(notes);
};

export const POST: RequestHandler = async ({ request, locals }) => {
	const note: { title: string; content: string } = await request.json();

	await createNote(note, locals.user.id);

	const notes = await getNotes();

	return json(notes);
};

export const DELETE: RequestHandler = async ({ request }) => {
	const id: number = await request.json();

	await deleteNote(id);

	const notes = await getNotes();

	return json(notes);
};
