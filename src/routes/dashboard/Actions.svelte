<script lang="ts">
	import AddFolderIcon from '$assets/icons/folder-plus.svg?component';
	import DownloadIcon from '$assets/icons/download.svg?component';
	import DeleteIcon from '$assets/icons/trash.svg?component';
	import MetadataIcon from '$assets/icons/tag.svg?component';
	import ModifyIcon from '$assets/icons/edit.svg?component';
	import ColumnsIcon from '$assets/icons/columns.svg?component';
	import ApprovalIcon from '$assets/icons/dataflow.svg?component';
	import RetentionIcon from '$assets/icons/clock-rewind.svg?component';
	import MoveIcon from '$assets/icons/folder-move.svg?component';
	import NumberingIcon from '$assets/icons/file-numbering.svg?component';
	import DuplicateIcon from '$assets/icons/duplicate.svg?component';

	const actions = [
		{
			label: '+ folder',
			icon: AddFolderIcon
		},
		{
			label: 'Download',
			icon: DownloadIcon
		},
		{
			label: 'Delete',
			icon: DeleteIcon
		},
		{
			label: 'Metadata',
			icon: MetadataIcon
		},
		{
			label: 'Modify',
			icon: ModifyIcon
		},
		{
			label: 'Columns',
			icon: ColumnsIcon
		},
		{
			label: 'Approval',
			icon: ApprovalIcon
		},
		{
			label: 'Retention',
			icon: RetentionIcon
		},
		{
			label: 'Move',
			icon: MoveIcon
		},
		{
			label: 'Numbering',
			icon: NumberingIcon
		},
		{
			label: 'Duplicate',
			icon: DuplicateIcon
		}
	];
</script>

<div class="flex gap-5">
	{#each actions as action}
		<button
			type="button"
			class="hover:text-link grid cursor-pointer place-items-center gap-2 text-sm font-bold"
		>
			{#if action.icon}
				<action.icon />
			{/if}
			<span class="hidden whitespace-nowrap xl:block">{action.label}</span>
		</button>
	{/each}
</div>
