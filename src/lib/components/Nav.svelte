<script lang="ts">
	import { fade } from 'svelte/transition';

	// export let open: boolean;
</script>

<nav
	class="fixed bottom-0 left-0 top-0 z-40 flex w-screen flex-col items-center justify-around gap-x-4 rounded-md bg-yellow-200 pt-4 text-2xl md:relative md:w-max md:flex-row md:bg-inherit md:text-3xl"
>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/">Home</a
	>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/events">Events</a
	>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/songs">Songs</a
	>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/about">About</a
	>
	<a
		on:click
		class="text-outline p-2 font-chewy font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/contact">Contact Us</a
	>
</nav>
