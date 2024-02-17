// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { PrismaClient, User } from '@prisma/client';

declare global {
	declare namespace App {
		interface Locals {
			user: User;
		}
	}
	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
}
