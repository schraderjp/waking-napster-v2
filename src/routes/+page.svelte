<script>
	import Youtube from 'svelte-youtube-embed';
</script>

<svelte:head>
	<title>Waking Napster</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div
	class="relative mx-auto mt-8 flex flex-col items-center justify-center gap-x-8 px-4 md:flex-row lg:max-w-5xl"
>
	<div class="w-[90vw] rounded-md bg-teal-400 lg:w-7/12">
		<div class="rounded-md p-4">
			<Youtube id="1ep1KKOEX0Q" />
		</div>
	</div>
	<div class="relative mx-2 mt-8 flex w-[85vw] items-center justify-center p-4 lg:w-5/12">
		<p class="z-10 rounded-xl bg-purple-700 p-4 font-chewy text-xl leading-loose text-yellow-200">
			Waking Napster is a cover band playing a wide mix of songs you "allegedly" downloaded to your
			Napster library back in the day.
		</p>
		<div class="absolute bottom-0 left-0 right-0 top-0 rotate-3 rounded-xl bg-pink-400" />
		<div
			class="absolute bottom-0 left-0 right-0 top-0 -translate-x-2 -translate-y-2 rotate-3 rounded-xl bg-green-400"
		/>
		<div
			class="absolute bottom-2 left-2 right-2 top-2 -translate-x-1 -rotate-3 rounded-xl bg-indigo-300"
		/>
	</div>
</div>
