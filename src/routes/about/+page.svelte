<script lang="ts">
	import logo from '$lib/assets/WakingNapster.svg';
	import { blur, fade, fly, slide } from 'svelte/transition';
	let activeTab: string = 'band';
</script>

<svelte:head>
	<title>Waking Napster - About the Band</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div class="flex w-screen flex-col items-center justify-center pt-4">
	<h1 class="pb-4 font-chewy text-4xl text-green-500">About</h1>

	<div class="relative flex w-[min(95vw,32rem)] items-center justify-center rounded-lg bg-blue-300">
		<div
			class={`absolute bottom-1 right-1 top-1 z-10 w-[calc(50%-0.25rem)] rounded-lg transition-transform ${
				activeTab === 'band' ? 'translate-x-[-100%]' : 'translate-x-0'
			}  bg-yellow-300`}
		/>
		<button
			on:click={() => (activeTab = 'band')}
			class={`${
				activeTab === 'band'
					? 'scale-110 cursor-default text-pink-600'
					: 'text-blue-700 hover:brightness-125 active:scale-95 active:brightness-90'
			}  z-30 w-1/2 flex-auto flex-shrink-0 p-2 font-chewy text-2xl  transition-all   `}
			>The Band</button
		>
		<button
			on:click={() => (activeTab = 'members')}
			class={`${
				activeTab === 'members'
					? 'scale-110 cursor-default text-pink-600'
					: 'text-blue-700 hover:brightness-125 active:scale-95 active:brightness-90'
			}  z-30 w-1/2 flex-auto flex-shrink-0 p-2 font-chewy text-2xl  transition-all   `}
			>The Members</button
		>
	</div>
	{#if activeTab === 'band'}
		<div class="flex flex-col items-center justify-center px-4 lg:flex-row" in:fade>
			<img
				class="h-full w-[min(90vw,36rem)]"
				in:fly={{ delay: 100, x: 0, y: 50 }}
				src={logo}
				alt="Waking Napster Logo"
			/>
			<p
				in:fly={{ delay: 250, x: 0, y: 50 }}
				class=" max-w-[60ch] px-8 font-lato leading-relaxed text-gray-800 sm:text-xl"
			>
				Waking Napster is a group of people that have enjoyed entertaining people all over the
				DelMarVa region for over 5 years. Playing high energy party music from the 90’s and 00’s,
				with a bit of 70’s and 80’s mixed in for some good grooves. The goal of Waking Napster is to
				create a moment in time that everyone can join in together, forget and laugh your troubles
				away while singing and dancing to all your favorite songs. We love playing for all types of
				events and hope to see you at one of our shows or play for your event or venue sometime.
			</p>
		</div>
	{:else if (activeTab = 'members')}
		<div in:fade class="mt-2">
			<ul>
				<li>Aubrey</li>
				<li>Dave</li>
				<li>Alicia</li>
				<li>Jay</li>
			</ul>
		</div>
	{/if}
</div>
