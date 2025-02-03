import { redirect, type Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('access_token')
	event.locals.token = token // Store token in locals

	const { url } = event

	if (!token && url.pathname !== '/' && !url.pathname.startsWith('/auth')) {
		redirect(303, '/')
	}

	if (token && !url.pathname.startsWith('/dashboard')) {
		redirect(303, '/dashboard')
	}

	return resolve(event)
}
