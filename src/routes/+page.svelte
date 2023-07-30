<script lang="ts">
	import Youtube from 'svelte-youtube-embed';
	import MdPlayCircleOutline from 'svelte-icons/md/MdPlayCircleOutline.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Waking Napster</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
	<link
		rel="preload"
		as="image"
		href="/wn_desktop_banner_jxrmoc_c_scale,w_1600.webp"
		type="image/webp"
	/>
	<link
		rel="preload"
		as="image"
		href="/wn_mobile_banner_bxda0x_c_scale,w_760.webp"
		type="image/webp"
	/>
</svelte:head>
<div class="animate relative mt-4 flex items-center justify-center">
	<img
		loading="eager"
		srcset="
wn_mobile_banner_bxda0x_c_scale,w_320.webp 320w,
wn_mobile_banner_bxda0x_c_scale,w_477.webp 477w,
wn_mobile_banner_bxda0x_c_scale,w_567.webp 567w,
wn_mobile_banner_bxda0x_c_scale,w_685.webp 685w,
wn_mobile_banner_bxda0x_c_scale,w_760.webp 760w"
		src="wn_mobile_banner_bxda0x_c_scale,w_760.webp"
		in:fade
		class="min-h-[20rem] md:hidden"
		alt="Main Banner"
		width="760"
		height="900"
	/>

	<img
		loading="eager"
		in:fade
		width="1600"
		height="618"
		class="hidden min-h-[16rem] md:block"
		alt="Main Banner"
		srcset="
wn_desktop_banner_jxrmoc_c_scale,w_760.webp 760w,
wn_desktop_banner_jxrmoc_c_scale,w_1048.webp 1048w,
wn_desktop_banner_jxrmoc_c_scale,w_1205.webp 1205w,
wn_desktop_banner_jxrmoc_c_scale,w_1488.webp 1488w,
wn_desktop_banner_jxrmoc_c_scale,w_1600.webp 1600w"
		src="wn_desktop_banner_jxrmoc_c_scale,w_1600.webp"
	/>
	<p
		in:fade={{ delay: 100 }}
		class="absolute bottom-0 left-0 right-0 w-full bg-black bg-opacity-70 px-2 py-2 text-center font-chewy text-2xl text-yellow-300"
	>
		Playing your favorite pirated songs from the 90's and beyond
	</p>
</div>

<div
	in:fade={{ delay: 200 }}
	class="animate relative -z-10 flex flex-col items-center justify-center gap-x-2 gap-y-2 p-4 md:flex-row md:justify-around"
>
	<div class="relative -z-10 mt-2 h-full min-h-[7.5rem] w-full">
		<div class="z-20">
			<Youtube id="1ep1KKOEX0Q" --title-font-family="Chewy">
				<div class="h-16 w-16 rounded-full bg-white text-pink-600 transition-all hover:scale-110">
					<MdPlayCircleOutline />
				</div>
			</Youtube>
		</div>
	</div>
	<div
		in:fade={{ delay: 250 }}
		class="animate shadow-no-blur relative m-2 flex w-[85vw] min-w-max flex-col items-start gap-x-2 gap-y-2 rounded-lg bg-wn-yellow p-4 text-left font-lato text-lg font-bold leading-loose text-pink-600 shadow-black xs:flex-row xs:text-xl md:max-w-xs md:flex-col lg:max-w-sm lg:text-2xl xl:max-w-md"
	>
		<div>
			<strong class="font-chewy text-xl font-bold xs:text-2xl lg:text-3xl">Get in Touch:</strong>
			<p class="mt-2">
				<a
					class="inline-flex items-center font-lato text-lg text-purple-700 underline hover:text-purple-400 xs:text-xl lg:text-2xl"
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
						class="inline-flex items-center align-bottom font-lato text-lg text-purple-700 underline hover:text-purple-400 xs:text-xl lg:text-2xl"
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
						class=" inline-flex items-center align-bottom font-lato text-lg text-purple-700 underline hover:text-purple-400 xs:text-xl lg:text-2xl"
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

<style>
</style>
