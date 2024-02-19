import { i18n } from '$lib/inlang/i18nrouting';
import { redirect, type Handle, type HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleI18n = i18n.handle({ langPlaceholder: '%lang%' });

const secondDefault: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/') {
		return Response.redirect(`${event.url.origin}/sign-in`, 303);
	}

	const token = event.cookies.get('user-jwt');
	if (token) {
		event.locals.user = JSON.parse(atob(token));
	}

	return await resolve(event);
};

export const handle = sequence(handleI18n, secondDefault);

export const handleError: HandleServerError = ({ message, event, error }) => {
	if (message.includes('Not found') && event.url.pathname.includes('home')) {
		redirect(307, '/home');
	}

	console.log(error);

	return {
		message: 'Whoops! Something went wrong.'
	};
};
