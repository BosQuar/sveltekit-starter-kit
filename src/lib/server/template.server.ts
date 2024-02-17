import type { Note } from '@prisma/client';

import { prisma } from '../../db.server';

export function getNotes() {
	return prisma.note.findMany({ orderBy: { updatedAt: 'desc' } });
}

export function getNoteById(id: number) {
	return prisma.note.findFirst({
		select: {
			title: true,
			content: true
		},
		where: { id }
	});
}

export function getNotesByUser(createdById: number) {
	return prisma.note.findMany({ where: { createdById }, orderBy: { updatedAt: 'desc' } });
}

export type CreateNote = Omit<Note, 'updatedAt' | 'createdAt' | 'id' | 'createdById' | 'cuid'>;
export function createNote({ title, content }: CreateNote, createdById: number) {
	return prisma.note.create({
		data: {
			title,
			content,
			createdBy: {
				connect: {
					id: createdById
				}
			}
		}
	});
}

export type UpdateNote = Omit<Note, 'updatedAt' | 'createdAt' | 'createdById' | 'cuid'>;
export function updateNote({ id, title, content }: UpdateNote, createdById: number) {
	return prisma.note.updateMany({
		where: {
			id,
			createdById
		},
		data: {
			title,
			content
		}
	});
}

export function deleteNote(id: number) {
	return prisma.note.delete({
		where: { id }
	});
}
