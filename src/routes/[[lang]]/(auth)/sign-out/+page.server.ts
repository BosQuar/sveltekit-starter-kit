import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	cookies.delete('user-jwt', { path: '/' });
	redirect(303, '/sign-in');
};
