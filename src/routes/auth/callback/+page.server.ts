import { FOLDERIT_CLIENT_SECRET } from '$env/static/private'
import { PUBLIC_FOLDERIT_CLIENT_ID, PUBLIC_REDIRECT_URI } from '$env/static/public'
import { error, redirect } from '@sveltejs/kit'

export async function load({ url, cookies }) {
	const code = url.searchParams.get('code')

	if (!code) {
		console.error('No code provided')
		return error(400)
	}

	// Exchange code for access token
	const response = await fetch('https://auth.folderit.com/oauth2/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: new URLSearchParams({
			grant_type: 'authorization_code',
			client_id: PUBLIC_FOLDERIT_CLIENT_ID,
			client_secret: FOLDERIT_CLIENT_SECRET,
			redirect_uri: PUBLIC_REDIRECT_URI,
			code
		})
	})

	const data = await response.json()

	if (!data || data.error) {
		console.error('Fetch token failed', data.error)
		return error(400)
	}

	// Store access token in cookie
	cookies.set('access_token', data.access_token, {
		path: '/',
		secure: false,
		httpOnly: true,
		sameSite: 'lax',
		expires: new Date(Date.now() + 1000 * data.expires_in)
	})

	redirect(302, '/dashboard')
}
