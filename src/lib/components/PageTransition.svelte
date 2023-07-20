<script lang="ts">
	import { fade } from 'svelte/transition';

	export let classes: string = '';
</script>

<div class={classes} in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 175 }}>
	<slot />
</div>
