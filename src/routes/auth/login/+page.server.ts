import { redirect } from '@sveltejs/kit';

export const actions = {
	default() {
		redirect(
			303,
			'https://auth.folderit.com/oauth2/auth?response_type=code&client_id=iItzmJMwC56DYMHl&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth%2Fcallback&state=thisisasecretstring'
		);
	}
};
