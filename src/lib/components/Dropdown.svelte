<script lang="ts">
	let { trigger, list } = $props()
</script>

<div class="group relative">
	{@render trigger()}

	<div
		class="dropdown border-main-pale absolute end-0 hidden rounded-lg border bg-white p-2 shadow group-hover:block"
	>
		{@render list()}
	</div>
</div>
