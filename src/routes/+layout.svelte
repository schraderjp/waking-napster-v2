<script lang="ts">
	import '../app.css';
	import '@fontsource/chewy';
	import '@fontsource/lato';
	import '@fontsource-variable/anybody';
	import logo from '$lib/assets/WkngNpstr_03_open.svg';
	import altLogo from '$lib/assets/WkngNpstr_01_closed(1).svg';
	import Nav from '$lib/components/Nav.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import FaSoundcloud from 'svelte-icons/fa/FaSoundcloud.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import { browser } from '$app/environment';
	import { blur, fade, scale } from 'svelte/transition';
	import { clickoutside } from '@svelte-put/clickoutside';

	let open: boolean = false;
	let chatBubbleShown = false;
	let screenSize: number;
	let hovering = false;
	export let data;

	function handleClickOutside() {
		open = false;
	}

	$: pathname = data.pathname;

	function enableDisableScrollbar(openStatus: boolean) {
		if (!browser) return;
		if (!!openStatus) document.body.style.overflow = 'hidden';
		if (!openStatus || screenSize >= 768) document.body.style.overflow = 'auto';
	}

	function closeMenuOnResize() {
		if (screenSize >= 768) open = false;
	}

	$: open, enableDisableScrollbar(open);
	$: screenSize, closeMenuOnResize();
</script>

<svelte:window bind:innerWidth={screenSize} />
<div class="relative mx-auto flex w-full flex-col items-center justify-center pt-2 lg:container">
	<header class="flex w-full justify-center gap-x-12">
		<div role="banner" class="relative h-max w-max">
			<button
				use:clickoutside
				on:clickoutside={() => (chatBubbleShown = false)}
				on:click={() => {
					chatBubbleShown = !chatBubbleShown;
				}}
				class="peer absolute left-[2.25rem] top-16 z-50 h-9 w-7 cursor-pointer rounded-full bg-transparent"
			/>
			<img
				width="864"
				height="504"
				src={logo}
				alt="Waking Napster logo"
				class="block h-full w-36 peer-hover:hidden xs:w-48"
			/>
			<img
				width="864"
				height="504"
				src={altLogo}
				alt="Waking Napster logo"
				class="hidden h-full w-36 peer-hover:block xs:w-48"
			/>
			{#if false}
				<div
					transition:scale
					class="absolute left-12 top-6 z-40 w-36 rounded-xl bg-purple-700 p-2 font-chewy text-lg text-wn-yellow transition-opacity after:absolute after:-top-5 after:left-[50%] after:z-40 after:-ml-5 after:border-[1.25rem] after:border-t-0 after:border-transparent after:border-b-purple-700 xs:-left-6 xs:top-[110%]"
				>
					<a href="/songs"> See what people are saying! </a>
				</div>
			{/if}
		</div>
		<div class="hidden md:flex">
			<Nav on:click={() => (open = false)} />
		</div>
		<div
			use:clickoutside
			on:clickoutside={handleClickOutside}
			class="absolute right-0 top-0 z-40 flex flex-col items-end md:hidden"
		>
			<div class={`z-50 flex items-end justify-end ${open ? 'fixed' : ''}`}>
				<Hamburger
					--color="rgb(190 24 93)"
					--hover-opacity="1"
					--active-color="#a855f7"
					--layer-width="2rem"
					--layer-height="0.25rem"
					--padding="1.5rem"
					bind:open
				/>
			</div>
			{#if open}
				<div>
					<Nav on:click={() => (open = false)} />
				</div>
			{/if}
		</div>
	</header>
	{#key pathname}
		<main
			class={`relative z-0 mx-auto w-full overflow-x-hidden`}
			in:fade={{ duration: 100, delay: 100 }}
			out:fade={{ duration: 100 }}
		>
			<slot />
			{#if open}
				<div
					transition:fade={{ duration: 100 }}
					class="fixed bottom-0 left-0 right-0 top-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm transition-all"
				/>
			{/if}
		</main>
	{/key}
</div>
{#key pathname}
	<footer
		in:fade={{ duration: 50, delay: 50 }}
		out:fade={{ duration: 50 }}
		class="mt-auto flex flex-col items-center justify-center gap-4 py-8"
	>
		<div class="flex h-8 items-center justify-center gap-x-4">
			<a
				class="flex h-8 w-8 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://www.facebook.com/wakingnapster/"
			>
				<FaFacebook />
				<span class="sr-only">Facebook</span></a
			>
			<a
				class="flex h-8 w-8 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://www.instagram.com/waking_napster/?hl=en"
			>
				<FaInstagram />
				<span class="sr-only">Instagram</span></a
			>
			<a
				class="flex h-8 w-8 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://www.youtube.com/channel/UCKQjTyWs0zUaTXDL---ovLg"
			>
				<FaYoutube />
				<span class="sr-only">YouTube</span></a
			>
			<a
				class="flex h-8 w-8 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://soundcloud.com/waking-napster"
			>
				<FaSoundcloud />
				<span class="sr-only">Soundcloud</span></a
			>
			<a
				class="flex h-8 w-8 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="mailto:wakingnapster@gmail.com"
			>
				<MdEmail />
				<span class="sr-only">Email</span></a
			>
		</div>

		<p class="font-bold text-pink-700">&copy; Waking Napster 2023</p>
	</footer>
{/key}
