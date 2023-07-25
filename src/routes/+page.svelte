<script>
	import Youtube from 'svelte-youtube-embed';
	import MdPlayCircleOutline from 'svelte-icons/md/MdPlayCircleOutline.svelte';
	import banner from '$lib/assets/Waking Napster Banner 2.png';
	import wakingNapster from '$lib/assets/WakingNapster.svg';
	import closeEyesFace from '$lib/assets/WakingNapster6_01_closed.png';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
</script>

<svelte:head>
	<title>Waking Napster</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div class="relative mx-auto mt-4 flex w-full items-center justify-center">
	<img class="mx-auto w-full brightness-50" src={banner} alt="Band banner" />
	<div
		class="banner absolute bottom-0 left-0 right-0 top-0 flex h-full items-center rounded-lg bg-gray-700 bg-opacity-50 p-8 font-chewy text-yellow-400 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
	>
		<img class="h-3/4" src={wakingNapster} alt="Waking Napster large logo" />
		<p class="text-sx text-center">Playing your favorite pirated songs from the 90's and beyond</p>
	</div>
</div>
<div
	class="relative mx-auto mt-8 flex flex-col items-center justify-center gap-x-4 gap-y-6 px-4 md:max-w-full md:flex-row lg:max-w-6xl"
>
	<div
		class="relative -z-10 mx-2 mt-4 flex w-[90vw] items-center justify-center p-4 md:max-w-sm lg:max-w-lg"
	>
		<div class="z-20 p-2 md:p-4 lg:p-6">
			<Youtube
				id="1ep1KKOEX0Q"
				--title-color="white"
				--title-shadow-color="rgb(129, 140, 248)"
				--title-font-family="Chewy"
			>
				<button
					class="h-24 w-24 rounded-full bg-indigo-400 text-pink-200 transition-all hover:scale-110 hover:bg-pink-200 hover:text-indigo-400"
					><MdPlayCircleOutline />
				</button>
			</Youtube>
		</div>
		<div
			class="absolute bottom-0 left-0 right-0 top-0 rotate-3 rounded-xl bg-pink-400 shadow-2xl"
		/>
		<div
			class="absolute bottom-0 left-0 right-0 top-0 -translate-x-2 -translate-y-2 rotate-3 rounded-xl bg-green-400"
		/>
		<div
			class="absolute bottom-2 left-2 right-2 top-2 -translate-x-1 -rotate-1 rounded-xl bg-indigo-300"
		/>
	</div>
	<div
		class="relative mt-4 flex w-[85vw] flex-col items-center justify-center rounded-lg bg-yellow-300 p-4 font-lato font-bold text-pink-600 shadow-2xl md:max-w-xs"
	>
		<img src={closeEyesFace} class="h-16 w-16" alt="Closed eyes band logo" />
		<p class="text-justifed text-lg leading-loose lg:text-xl">
			Get in touch via <a
				class="inline-flex items-end justify-end align-bottom text-purple-600 underline hover:text-purple-400"
				href="mailto:wakingnapster@gmail.com0"
				><span class="mx-1 my-auto inline-flex h-8 w-8 items-center justify-center">
					<MdEmail />
				</span>email</a
			>
			or the
			<a
				class="inline-flex items-end justify-end align-bottom text-purple-600 underline hover:text-purple-400"
				href="/contact"
			>
				contact page
			</a>
			if you are interested in booking us. Check us out on
			<a
				class="inline-flex items-end justify-end align-bottom text-purple-600 underline hover:text-purple-400"
				href="https://www.youtube.com/@wakingnapster/videos"
				><span class="mx-1 my-auto inline-flex h-8 w-8 items-center justify-center">
					<FaYoutube />
				</span>YouTube</a
			>
			and
			<a
				class=" inline-flex items-end justify-end align-bottom text-purple-600 underline hover:text-purple-400"
				href="https://www.facebook.com/wakingnapster"
				><span class="mx-1 my-auto inline-flex h-8 w-8 items-center justify-center">
					<FaFacebook />
				</span>Facebook</a
			> for more videos!
		</p>
	</div>
</div>

<style>
</style>
