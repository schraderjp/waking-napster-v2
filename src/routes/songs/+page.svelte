<script lang="ts">
	import { onMount } from 'svelte';

	let screenSize: number;
	export let data;

	onMount(() => console.log(data));
</script>

<svelte:head>
	<title>Waking Napster - Songs</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<svelte:window bind:innerWidth={screenSize} />
<div class="flex flex-col items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Songs We Play</h1>
	<iframe
		src="https://docs.google.com/spreadsheets/d/1iLDkWfvaCc5ealj12WFGSUTimksH4wDvPiZOIC3SPF4/preview?pli=1#gid=506942782"
		title="Songs List"
		class="h-screen w-[90vw] rounded-lg border-2 border-pink-600 md:w-8/12"
	/>
</div>
