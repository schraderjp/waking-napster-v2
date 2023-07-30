<script lang="ts">
	import { onMount } from 'svelte';

	let visible: boolean = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<slot />
{/if}
