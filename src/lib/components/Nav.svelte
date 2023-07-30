<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	// export let open: boolean;
</script>

<nav
	in:fly={{ x: 0, y: -100 }}
	class="lg-text-3xl fixed left-0 top-0 z-40 flex w-screen flex-col items-center justify-around gap-x-4 gap-y-2 rounded-md bg-yellow-200 pb-2 pt-4 text-2xl shadow-md md:relative md:w-max md:flex-row md:bg-inherit md:shadow-none lg:text-4xl"
>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-700 transition-all hover:scale-110 hover:text-purple-500"
		href="/">Home</a
	>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-700 transition-all hover:scale-110 hover:text-purple-500"
		href="/events">Events</a
	>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-700 transition-all hover:scale-110 hover:text-purple-500"
		href="/songs">Songs</a
	>
	<a
		on:click
		class="p-2 font-chewy font-bold text-pink-700 transition-all hover:scale-110 hover:text-purple-500"
		href="/about">About</a
	>
	<a
		on:click
		class="text-outline p-2 font-chewy font-bold text-pink-700 transition-all hover:scale-110 hover:text-purple-500"
		href="/contact">Contact Us</a
	>
</nav>
