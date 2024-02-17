import type { Password, User } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { prisma } from '../../db.server';

export type { User } from '@prisma/client';

export async function getUserById(id: User['id']) {
	return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User['email']) {
	return prisma.user.findUnique({ where: { email } });
}

export async function createUser(
	user: Pick<User, 'firstName' | 'surname' | 'email' | 'role'>,
	password: string
) {
	const hashedPassword = await bcrypt.hash(password, 10);

	return prisma.user.create({
		data: {
			firstName: user.firstName,
			surname: user.surname,
			email: user.email,
			role: user.role,
			password: {
				create: {
					hash: hashedPassword
				}
			}
		}
	});
}

export function updateUserInformation(
	user: Pick<User, 'id' | 'firstName' | 'surname' | 'email' | 'role'>
) {
	return prisma.user.update({
		where: {
			id: user.id
		},
		data: {
			firstName: user.firstName,
			surname: user.surname,
			email: user.email,
			role: user.role
		}
	});
}

export async function updateUserPassword(userId: number, password: string) {
	const hashedPassword = await bcrypt.hash(password, 10);
	return prisma.user.update({
		where: {
			id: userId
		},
		data: {
			password: {
				update: {
					hash: hashedPassword
				}
			}
		}
	});
}

export async function deleteUserByEmail(email: User['email']) {
	return prisma.user.delete({ where: { email } });
}

export async function verifyLogin(email: User['email'], password: Password['hash']) {
	const userWithPassword = await prisma.user.findUnique({
		where: { email },
		include: {
			password: true
		}
	});

	if (!userWithPassword || !userWithPassword.password) {
		return null;
	}

	const isValid = await bcrypt.compare(password, userWithPassword.password.hash);

	if (!isValid) {
		return null;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { password: _password, ...userWithoutPassword } = userWithPassword;

	return userWithoutPassword;
}
