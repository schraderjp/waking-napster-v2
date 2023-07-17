<script lang="ts">
	// export let open: boolean;
</script>

<nav
	class="fixed md:relative bottom-0 left-0 top-0 z-10 flex w-screen md:w-max flex-col items-center justify-around gap-x-4 rounded-md md:bg-inherit bg-yellow-200 pt-4 md:flex-row"
>
	<a
		on:click
		class="p-2 font-chewy text-4xl font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/">Home</a
	>
	<a
		on:click
		class="p-2 font-chewy text-4xl font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/events">Events</a
	>
	<a
		on:click
		class="p-2 font-chewy text-4xl font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/about">About</a
	>
	<a
		on:click
		class="text-outline p-2 font-chewy text-4xl font-bold text-pink-600 transition-all hover:scale-110 hover:text-purple-500"
		href="/contact">Contact Us</a
	>
</nav>
