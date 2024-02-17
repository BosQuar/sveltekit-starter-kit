import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
	// cleanup the existing database
	await prisma.user.deleteMany();

	dbQueries();

	console.log(`Database has been seeded. 🌱`);
}

seed()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

async function dbQueries() {
	await prisma.user.create({
		data: {
			email: 'o@t.t',
			firstName: 'O',
			surname: 'B',
			role: 'user',
			password: {
				create: {
					hash: await bcrypt.hash('qweQWE123', 10)
				}
			}
		}
	});
}
