import { FOLDERIT_CLIENT_ID, FOLDERIT_CLIENT_SECRET } from '$env/static/private'
import { error, redirect } from '@sveltejs/kit'

export async function load({ url, cookies }) {
	const code = url.searchParams.get('code')

	if (!code) {
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
			client_id: FOLDERIT_CLIENT_ID,
			client_secret: FOLDERIT_CLIENT_SECRET,
			redirect_uri: 'http://localhost:5173/auth/callback',
			code
		})
	})

	const data = await response.json()

	if (!data || data.error) {
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
