<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	export let element: HTMLElement;
	let intersecting: boolean;
</script>

<IntersectionObserver {element} bind:intersecting>
	<slot />
</IntersectionObserver>
