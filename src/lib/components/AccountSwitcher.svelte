<script lang="ts">
	import AvatarPlaceholder from '$assets/icons/avatar-placeholder.svg?component'
	import { page } from '$app/state'
</script>

<div class="border-main-pale bg-main-mist sticky top-0 border-e border-b">
	<div class="-ms-2 grid grid-cols-[auto_1fr] items-center gap-2">
		<figure class="border-main-pale rounded-2xl border bg-white p-3">
			<AvatarPlaceholder />
		</figure>

		<p>
			<a href="/dashboard">
				<strong class="line-clamp-1">
					{page.data.account.name}
				</strong></a
			>
		</p>
	</div>
</div>
