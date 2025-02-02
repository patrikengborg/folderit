<script lang="ts">
	import type { PageData } from './$types';
	import Microsoft from '$assets/microsoft.svg?component';

	let { data }: { data: PageData } = $props();
</script>

<div class="grid place-content-center p-5">
	<h1 class="mb-1 text-2xl">Log in</h1>

	<p class="text-main-soft">Enter your credentials to access your account</p>

	<form action="/auth/login" method="POST" class="mt-8 grid gap-2.5">
		<label class="label-inside">
			<span>Email</span>
			<input type="email" name="email" class="input-text" placeholder="" />
		</label>

		<label class="label-inside">
			<span>Password</span>
			<input type="password" name="password" class="input-text" placeholder="" />
		</label>

		<div class="flex justify-between">
			<label class="flex cursor-pointer items-center gap-1">
				<input type="checkbox" name="remember" id="remember" />
				<span>Remember me</span>
			</label>

			<a href="/auth/forgot" class="text-sm">Forgot Password</a>
		</div>

		<button type="submit" class="btn mt-2">Continue</button>
	</form>

	<p class="divider my-6 text-center text-xs">Or</p>

	<form method="post">
		<button type="submit" class="border-main-soft w-full border p-2 text-center font-bold">
			<Microsoft />
			Sign in with Microsoft
		</button>
	</form>

	<p class="text-main-soft mt-8 text-xs">
		© {new Date().getFullYear()} Folderit. All rights reserved.
	</p>
</div>
