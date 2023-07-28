<script>
	import Youtube from 'svelte-youtube-embed';
	import MdPlayCircleOutline from 'svelte-icons/md/MdPlayCircleOutline.svelte';
	import banner from '$lib/assets/Waking Napster Banner 2.png';
	import jayImg from '$lib/assets/jay.jpeg';
	import aubreyImg from '$lib/assets/aubrey.jpeg';
	import aliciaImg from '$lib/assets/alicia.jpeg';
	import daveImg from '$lib/assets/dave.jpeg';
	import wakingNapster from '$lib/assets/WakingNapster.svg';
	import mobileBanner from '$lib/assets/wn mobile banner.png';
	import desktopBanner from '$lib/assets/wn desktop banner 2.png';
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
	<img class="md:hidden" src={mobileBanner} alt="Main Banner" />
	<img class="hidden md:block" src={desktopBanner} alt="Main Banner" />
	<!-- <div class="mx-auto flex max-w-[100vw]">
		<img class="w-1/4 flex-shrink" src={aubreyImg} alt="Aubrey" />
		<img class="w-1/4 flex-shrink" src={daveImg} alt="Dave" />
		<img class="w-1/4 flex-shrink" src={jayImg} alt="Jay" />
		<img class="w-1/4 flex-shrink" src={aliciaImg} alt="Alicia" />
	</div>
	<img class="mx-auto w-full brightness-50" src={banner} alt="Band banner" />
	<div
		class="banner absolute bottom-0 left-0 right-0 top-0 flex h-full items-end justify-center rounded-lg bg-gray-700 bg-opacity-50 p-1 font-chewy text-yellow-400 xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
	>
		<img class="h-3/4" src={wakingNapster} alt="Waking Napster large logo" />
	</div> -->
</div>
<!-- <p class="w-full bg-purple-600 px-2 py-2 text-center font-chewy text-yellow-300">
	Playing your favorite pirated songs from the 90's and beyond
</p> -->
<div
	class="relative -z-10 mx-auto flex flex-col items-center justify-center gap-x-2 gap-y-2 p-4 md:max-w-full md:flex-row md:justify-around lg:max-w-full"
>
	<div
		class="relative -z-10 mt-2 flex max-w-[min(95vw,48rem)] flex-shrink flex-grow -rotate-1 items-center justify-center p-2"
	>
		<div class="z-20 h-full w-full p-2 md:p-4 lg:p-6">
			<Youtube
				id="1ep1KKOEX0Q"
				--title-color="white"
				--title-shadow-color="rgb(129, 140, 248)"
				--title-font-family="Chewy"
			>
				<div class="h-16 w-16 rounded-full bg-white text-pink-600 transition-all hover:scale-110">
					<MdPlayCircleOutline />
				</div>
			</Youtube>
		</div>
		<!-- <div class="absolute bottom-0 left-0 right-0 top-0 rotate-3 bg-pink-400 shadow-2xl" /> -->
		<!-- <div
			class="absolute bottom-0 left-0 right-0 top-0 -translate-x-2 -translate-y-2 rotate-3 bg-green-400"
		/> -->
		<div
			class="absolute bottom-2 left-2 right-2 top-2 flex-shrink flex-grow -translate-x-1 bg-green-300"
		/>
	</div>
	<div
		class="shadow-no-blur relative mt-2 flex w-[85vw] max-w-[min(85vw,32rem)] flex-col items-center justify-center bg-yellow-300 p-4 font-lato font-bold text-pink-600 shadow-black"
	>
		<img src={closeEyesFace} class="h-16 w-16" alt="Closed eyes band logo" />
		<p class="text-justifed leading-loose lg:text-xl">
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
