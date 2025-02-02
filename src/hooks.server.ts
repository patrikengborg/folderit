import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('access_token')

	event.locals.token = token // Store token in locals

	return resolve(event)
}
