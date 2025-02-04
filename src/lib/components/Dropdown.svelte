<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside'
	import type { Snippet } from 'svelte'

	type Type = 'default' | 'tight'

	interface Props {
		open: boolean
		trigger: Snippet
		list: Snippet
		type?: Type
		class?: string
	}

	let { open = $bindable(), trigger, list, type = 'default', class: classes }: Props = $props()
</script>

<div
	class={[classes, 'relative']}
	use:clickOutside
	onclick_outside={() => {
		open = false
	}}
>
	{@render trigger()}

	<div
		class={[
			'dropdown border-main-pale absolute end-0 z-10  origin-top-right rounded-lg border bg-white p-2 shadow transition-all duration-500',
			open ? 'block' : 'hidden',
			type === 'tight' && 'dropdown--tight'
		]}
	>
		{@render list()}
	</div>
</div>

<style>
	.dropdown {
		transition-timing-function: var(--easing-spring);
		opacity: 1;
		transform: scale(1);
	}

	@starting-style {
		.dropdown {
			opacity: 0;
			transform: scale(0.8);
		}
	}
</style>
