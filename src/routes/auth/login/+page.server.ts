import { redirect } from '@sveltejs/kit'
import { PUBLIC_FOLDERIT_CLIENT_ID, PUBLIC_REDIRECT_URI } from '$env/static/public'

export const actions = {
	default() {
		const login_url = `https://auth.folderit.com/oauth2/auth?response_type=code&client_id=${PUBLIC_FOLDERIT_CLIENT_ID}&redirect_uri=${encodeURIComponent(PUBLIC_REDIRECT_URI)}&state=thisisasecretstring`
		redirect(303, login_url)
	}
}
