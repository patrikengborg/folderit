<script lang="ts">
	import logo from '$assets/logo.svg?url'
	import { PUBLIC_FOLDERIT_CLIENT_ID, PUBLIC_REDIRECT_URI } from '$env/static/public'
	const login_url = `https://auth.folderit.com/oauth2/auth?response_type=code&client_id=${PUBLIC_FOLDERIT_CLIENT_ID}&redirect_uri=${encodeURIComponent(PUBLIC_REDIRECT_URI)}&state=thisisasecretstring`
</script>

<svelte:head>
	<title>Document Management System - Folderit - Simple &amp; Secure EDMS</title>
</svelte:head>

<div class="grid min-h-dvh place-items-center">
	<div class="grid place-items-center gap-12">
		<img src={logo} alt="Folderit" class="w-40" />

		<a class="btn px-6" href={login_url}>Continue to login</a>
	</div>
</div>
