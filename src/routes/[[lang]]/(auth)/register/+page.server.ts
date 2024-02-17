import { createUser, type User } from '$lib/server/user.server';

import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { formSchema } from './schema';

export const load = async ({ locals }) => {
	if (locals.user) {
		redirect(307, '/home');
	}

	return { form: await superValidate(formSchema) };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const newUser: Pick<User, 'firstName' | 'surname' | 'email' | 'role'> = {
			firstName: form.data.firstName,
			surname: form.data.surname,
			email: form.data.email,
			role: 'user'
		};

		const user = await createUser(newUser, form.data.password);

		const value = btoa(JSON.stringify(user));
		event.cookies.set('user-jwt', value, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30
		});

		redirect(303, '/home');
	}
};
