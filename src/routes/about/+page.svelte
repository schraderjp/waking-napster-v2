<script lang="ts">
	import logo from '$lib/assets/WakingNapster.png';
	import TransitionOnMount from '$lib/components/TransitionOnMount.svelte';
	import { blur, fade, fly, slide } from 'svelte/transition';
	import aubreyPhoto from '$lib/assets/aubrey-bio.jpeg';
	import davePhoto from '$lib/assets/dave-bio.jpeg';
	import aliciaPhoto from '$lib/assets/alicia-bio.jpeg';
	import jayPhoto from '$lib/assets/jay-bio.jpeg';
	import BioCard '$lib/components/BioCard.svelte';

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
	<TransitionOnMount>
		{#if activeTab === 'band'}
			<div class="flex flex-col items-center justify-center px-4 pt-4 lg:flex-row" in:fade>
				<img
					width="1800"
					height="1620"
					class="lg:1/3 h-full w-full sm:w-2/3"
					in:fly|global={{ delay: 100, x: 0, y: 50 }}
					src={logo}
					alt="Waking Napster Logo"
				/>
				<p
					in:fly|global={{ delay: 250, x: 0, y: 50 }}
					class=" max-w-[60ch] px-2 font-anybody leading-loose text-gray-800 sm:text-lg sm:leading-loose"
				>
					Waking Napster is a group of people that have enjoyed entertaining people all over the
					DelMarVa region for over 5 years. Playing high energy party music from the 90’s and 00’s,
					with a bit of 70’s and 80’s mixed in for some good grooves. The goal of Waking Napster is
					to create a moment in time that everyone can join in together, forget and laugh your
					troubles away while singing and dancing to all your favorite songs. We love playing for
					all types of events and hope to see you at one of our shows or play for your event or
					venue sometime.
				</p>
			</div>
		{:else if (activeTab = 'members')}
			<div in:fade class="mt-2 w-full">
				<ul class="mx-auto flex flex-col items-center justify-center pt-2">
						<li class="flex w-full items-start justify-center">
							<BioCard name="Aubrey" imgSrc={aubreyPhoto}
								>Aubrey (Acoustic Aubrey) started playing classical guitar at 15 years old and
								participated in jazz bands, bluegrass jams, and developed a regionally known jazz
								trio that was renown for swing and hired by UVA for swing dances. As much fun as
								playing jazz music was, Aubrey wanted to get into a more exciting party atmosphere
								and build a 90’s, 00’s party band.

								<br class="md:hidden" /><br class="md:hidden" />He enjoys taking all types of music
								and building a fun party vibe as well as join in on the fun of sharing a moment in
								time with fans of Waking Napster. When not playing music he is… playing music,
								working or hanging with the family. He is not a fan of a certain roast beef selling
								company that he doesn’t want to mention for fear of being sued.
							</BioCard>
							<hr class="runded-xl mx-4 border border-orange-400" />
						</li>
						<li class="flex w-full items-start justify-center">
							<BioCard position="right" imgSrc={davePhoto} name="Dave">
								Dave is the backbone of Waking Napster. Besides being a drummer of countless styles,
								he also produces all the videos that Waking Napster streams, and records live and
								makes sure that we look pretty in the lighting. Dave has been playing drums since he
								was a teenager in punk and rock bands in the Fredericksburg area.

								<br class="md:hidden" /><br class="md:hidden" /> Always ready with his sample pad to
								drop the bass or provide a “Toasty” trigger he keeps the party going, and helps you remember
								all the fun times you had in the 90’s and 00’s with sound clips at the ready. Dave is
								also an avid believer that sooner or later the robots are going to take over the earth
								in a dystopian landscape, so he is actively trying to befriend every electronic device
								to gain the robots’ trust.
							</BioCard>
							<hr class="mx-4 rounded-xl border border-orange-400" />
						</li>
					
						<li class="flex w-full items-start justify-center">
							<BioCard imgSrc={aliciaPhoto} name="Alicia">
								Alicia started playing piano since she was 9 years old and participated in district
								chorus and concert choir during her school days, singing and dancing in high school
								musicals (not the movie but close to it). Growing up with music has fostered a love
								for the arts that has only grown over the years. <br class="md:hidden" /><br
									class="md:hidden"
								/> She has somehow applied her classical music background to keys and joined Waking Napster,
								which makes complete sense. Blame it on her love for The Offspring and good times, because
								Alicia believes that you 100% need to make room for fun in life. When she is not playing
								with her band bros, she is spending time with her super cool family or getting a combo
								meal at Arby’s.
							</BioCard>
							<hr class="mx-4 rounded-xl border border-orange-400" />
						</li>
<li class="flex w-full items-start justify-center pt-8 md:pt-0">
							<BioCard position="right" imgSrc={jayPhoto} name="Jay">
								Dredged from the murk of Lake Erie, Jay somehow found the time to hone his low-end
								craft in between lighting bottle rockets and doing ollies with his friends.
							</BioCard>
						</li></Saos
					>
				</ul>
			</div>
		{/if}
	</TransitionOnMount>
</div>

<style>
	@keyframes -global-from-left {
		0% {
			transform: translateX(-200px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes -global-from-right {
		0% {
			transform: translateX(200px);
			opacity: 0;
		}
		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>
