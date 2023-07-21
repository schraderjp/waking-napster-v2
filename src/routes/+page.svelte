<script>
	import Youtube from 'svelte-youtube-embed';
	import MdPlayCircleOutline from 'svelte-icons/md/MdPlayCircleOutline.svelte';
</script>

<svelte:head>
	<title>Waking Napster</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div
	class="relative mx-auto mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-6 px-4 lg:max-w-6xl lg:flex-row"
>
	<div class="custom-box-shadow w-[min(90vw,48rem)] rounded-md bg-teal-400 md:w-9/12">
		<div class="rounded-md p-4">
			<Youtube
				id="1ep1KKOEX0Q"
				--title-color="white"
				--title-shadow-color="rgb(129, 140, 248)"
				--title-font-family="Chewy"
			>
				<button
					role="button"
					class="h-24 w-24 rounded-full bg-indigo-400 text-pink-200 transition-all hover:scale-110 hover:bg-pink-200 hover:text-indigo-400"
					><MdPlayCircleOutline />
				</button>
			</Youtube>
		</div>
	</div>
	<div class="relative mx-2 mt-6 flex w-[85vw] items-center justify-center p-4 md:w-8/12 lg:w-5/12">
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

<style>
	.custom-box-shadow {
		box-shadow: 10px 10px 0px 0px #fde047 !important;
	}
</style>
