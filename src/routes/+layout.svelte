<script lang="ts">
	import '../app.css';
	import '@fontsource/chewy';
	import '@fontsource/lato';
	import logo from '$lib/assets/WkngNpstr_03_open.svg';
	import Nav from '$lib/components/Nav.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import FaSoundcloud from 'svelte-icons/fa/FaSoundcloud.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';

	let open: boolean = false;
	let screenSize: number;
	export let data;

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
<div class="container relative mx-auto flex flex-col px-4 pt-2">
	<header class="flex justify-center gap-x-12">
		<img width="200" src={logo} alt="Waking Napster logo" />
		<div class="hidden md:flex">
			<Nav on:click={() => (open = !open)} />
		</div>
		<div class="absolute right-0 top-0 z-40 flex flex-col items-end md:hidden">
			<div class={`z-50 flex items-end justify-end ${open ? 'fixed' : ''}`}>
				<Hamburger
					--color="#db2777"
					--hover-opacity="1"
					--active-color="#a855f7"
					--layer-width="2rem"
					--layer-height="0.25rem"
					--padding="1.5rem"
					bind:open
				/>
			</div>
			{#if open}
				<div in:fade={{ duration: 150 }} out:fade={{ duration: 150, delay: 150 }}>
					<Nav on:click={() => (open = !open)} />
				</div>
			{/if}
		</div>
	</header>
	{#key pathname}
		<main in:fade={{ duration: 150, delay: 250 }} out:fade={{ duration: 150 }}><slot /></main>
	{/key}
</div>
{#key pathname}
	<footer
		in:fade={{ duration: 150, delay: 250 }}
		out:fade={{ duration: 150 }}
		class="mt-auto flex flex-col items-center justify-center gap-4 py-8"
	>
		<div class="flex h-14 items-center justify-center gap-x-4">
			<a
				class="flex h-14 w-14 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://www.facebook.com/wakingnapster/"
			>
				<FaFacebook />
				<span class="sr-only">Facebook</span></a
			>
			<a
				class="flex h-14 w-14 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://www.instagram.com/waking_napster/?hl=en"
			>
				<FaInstagram />
				<span class="sr-only">Instagram</span></a
			>
			<a
				class="flex h-14 w-14 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://www.youtube.com/channel/UCKQjTyWs0zUaTXDL---ovLg"
			>
				<FaYoutube />
				<span class="sr-only">YouTube</span></a
			>
			<a
				class="flex h-14 w-14 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="https://soundcloud.com/waking-napster"
			>
				<FaSoundcloud />
				<span class="sr-only">Soundcloud</span></a
			>
			<a
				class="flex h-14 w-14 items-center justify-center text-blue-500 transition-transform hover:scale-125 hover:text-purple-400"
				href="mailto:wakingnapster@gmail.com"
			>
				<MdEmail />
				<span class="sr-only">Email</span></a
			>
		</div>

		<p class="font-bold text-pink-600">&copy; Waking Napster 2023</p>
	</footer>
{/key}
