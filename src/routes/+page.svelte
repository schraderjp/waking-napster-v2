<script lang="ts">
	import Youtube from 'svelte-youtube-embed';
	import MdPlayCircleOutline from 'svelte-icons/md/MdPlayCircleOutline.svelte';
	import mobileBanner from '$lib/assets/wn mobile banner.png';
	import desktopBanner from '$lib/assets/wn desktop banner 2.png';
	import closeEyesFace from '$lib/assets/WakingNapster6_01_closed.png';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import TransitionOnMount from '$lib/components/TransitionOnMount.svelte';
</script>

<svelte:head>
	<title>Waking Napster</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<TransitionOnMount>
	<div class="relative mx-auto mt-4 flex w-full items-center justify-center">
		<img in:fade class="md:hidden" src={mobileBanner} alt="Main Banner" />

		<img in:fade class="hidden md:block" src={desktopBanner} alt="Main Banner" />
		<p
			in:fade={{ delay: 100 }}
			class="absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-70 px-2 py-2 text-center font-chewy text-2xl text-yellow-300"
		>
			Playing your favorite pirated songs from the 90's and beyond
		</p>
	</div>

	<div
		in:fade={{ delay: 200 }}
		class="relative -z-10 mx-auto flex flex-col items-center justify-center gap-x-2 gap-y-2 p-4 md:flex-row md:justify-around"
	>
		<div class="relative -z-10 mt-2 h-full w-full">
			<div class="z-20">
				<Youtube id="1ep1KKOEX0Q" --title-font-family="Chewy">
					<div class="h-16 w-16 rounded-full bg-white text-pink-600 transition-all hover:scale-110">
						<MdPlayCircleOutline />
					</div>
				</Youtube>
			</div>
			<!-- <div
			class="absolute bottom-2 left-2 right-2 top-2 flex-shrink flex-grow -translate-x-1 bg-green-300"
		/> -->
		</div>
		<div
			in:fade={{ delay: 250 }}
			class="shadow-no-blur relative m-2 flex w-[85vw] min-w-max flex-col items-start gap-x-2 gap-y-2 rounded-lg bg-wn-yellow p-4 text-left font-lato text-lg font-bold leading-loose text-pink-600 shadow-black xs:flex-row xs:text-xl md:max-w-xs md:flex-col lg:max-w-sm lg:text-2xl xl:max-w-md"
		>
			<!-- <img src={closeEyesFace} class="h-full w-24 p-2" alt="Closed eyes band logo" /> -->
			<div>
				<strong class="font-chewy text-xl font-bold xs:text-2xl lg:text-3xl">Get in Touch:</strong>
				<p class="mt-2">
					<a
						class="inline-flex items-center font-lato text-lg text-purple-600 underline hover:text-purple-400 xs:text-xl lg:text-2xl"
						href="/contact"
					>
						<span
							class="mx-1 my-auto inline-flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10 lg:h-12 lg:w-12"
							><MdEmail /></span
						>
						Send a Message
					</a>
				</p>
			</div>

			<div>
				<p class="md:mt-4">
					<strong class="font-chewy text-xl font-bold xs:text-2xl lg:text-3xl"
						>See More Videos:</strong
					>
				</p>
				<ul class="mt-2 flex flex-col items-start justify-center gap-y-4">
					<li>
						<a
							class="inline-flex items-center align-bottom font-lato text-lg text-purple-600 underline hover:text-purple-400 xs:text-xl lg:text-2xl"
							href="https://www.youtube.com/@wakingnapster/videos"
							><span
								class="mx-1 my-auto inline-flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10 lg:h-12 lg:w-12"
							>
								<FaYoutube />
							</span>YouTube</a
						>
					</li>
					<li>
						<a
							class=" inline-flex items-center align-bottom font-lato text-lg text-purple-600 underline hover:text-purple-400 xs:text-xl lg:text-2xl"
							href="https://www.facebook.com/wakingnapster"
							><span
								class="mx-1 my-auto inline-flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10 lg:h-12 lg:w-12"
							>
								<FaFacebook />
							</span>Facebook</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</TransitionOnMount>

<style>
</style>
