<script lang="ts">
	import ImgUploadFile from '$assets/illustrations/upload.svg?url'
	import FileRow from './FileRow.svelte'

	let { data } = $props()
</script>

<div>
	<p class="sticky -top-4 flex items-baseline gap-2 bg-white pb-4 text-sm">
		<span>{data.account.name}</span> <span class="text-xl">›</span>
		<span>{data.section?.name}</span>
	</p>

	{#if data.files.length > 0}
		<table class=" w-full">
			<thead>
				<tr>
					<th class="ps-4"><input type="checkbox" /></th>
					<th>Name</th>
					<th>Tags</th>
					<th>Date</th>
					<th>Size</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each data.files as file}
					<FileRow {file} />
				{/each}
			</tbody>
		</table>
	{:else}
		<div class="grid h-full place-content-center text-center">
			<figure
				class="bg-main-hazy mx-auto flex size-32 items-center justify-center rounded-full p-8"
			>
				<img src={ImgUploadFile} alt="" />
			</figure>

			<p class="text-main-soft">
				The folder is empty.<br />
				<a href="/" class="text-link font-bold underline">Click here</a> or drag your file(s) here.
			</p>
		</div>
	{/if}
</div>
