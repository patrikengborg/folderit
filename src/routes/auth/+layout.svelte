<script lang="ts">
	let { children } = $props();
	import login from '$assets/screens/login.svg?url';
	import logo from '$assets/logo.svg?url';
</script>

<div class="grid min-h-dvh grid-cols-1 md:grid-cols-2">
	<header class="fixed inset-x-0 flex justify-between p-8">
		<img src={logo} alt="Folderit" />

		<p>
			Not a user? <a href="/auth/signup">Sign Up</a>
		</p>
	</header>

	{@render children()}

	<div class="bg-accent-soft hidden place-content-center p-10 text-center md:grid">
		<div class="mx-auto grid max-w-xl place-items-center gap-4 p-5">
			<img src={login} alt="" />

			<h2 class="text-xl">Cloud Document Management System Software</h2>
			<p class="text-main-muted text-balance">
				Award-winning DMS for greener more secure storage, management and approval of digital
				documents.
			</p>
		</div>
	</div>
</div>
