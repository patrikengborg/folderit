<script lang="ts">
	import type { PageData } from './$types';
	import Microsoft from '$assets/microsoft.svg?component';

	let { data }: { data: PageData } = $props();
</script>

<div class="grid place-content-center p-5">
	<h1 class="mb-1 text-2xl">Signup</h1>

	<p class="text-main-soft">Enter your information to create an account.</p>

	<form action="?/login" method="POST" class="mt-8 grid gap-2.5">
		<label class="label-inside">
			<span>Company name</span>
			<input type="text" name="name" class="input-text" placeholder="" />
		</label>

		<label class="label-inside">
			<span>Phone number</span>
			<input type="text" name="name" class="input-text" placeholder="" inputmode="tel" />
		</label>

		<label class="label-inside">
			<span>Email</span>
			<input type="email" name="email" class="input-text" placeholder="" />
		</label>

		<label class="label-inside">
			<span>Country</span>
			<select name="" id="" class="input-text"></select>
		</label>

		<label class="label-inside">
			<span>Industry</span>
			<select name="" id="" class="input-text"></select>
		</label>

		<label class="label-inside">
			<span>Password</span>
			<input type="password" name="password" class="input-text" placeholder="" />
		</label>

		<label class="label-inside">
			<span>Confirm password</span>
			<input type="password" name="password" class="input-text" placeholder="" />
		</label>

		<label class="text-main-soft flex cursor-pointer items-center gap-1 text-sm">
			<input type="checkbox" name="remember" id="remember" />
			<span>I agree with Terms and Conditions</span>
		</label>

		<label class="text-main-soft flex cursor-pointer items-center gap-1 text-sm">
			<input type="checkbox" name="remember" id="remember" />
			<span>I have read and accept the Privacy and Cookie Policy</span>
		</label>

		<button type="submit" class="btn mt-2">Register</button>
	</form>

	<p class="text-main-soft mt-8 text-xs">
		© {new Date().getFullYear()} Folderit. All rights reserved.
	</p>
</div>
