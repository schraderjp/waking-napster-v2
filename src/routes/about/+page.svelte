<script lang="ts">
	import logo from '$lib/assets/WakingNapster.svg';
	import TransitionOnMount from '$lib/components/TransitionOnMount.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import aubreyPhoto from '$lib/assets/aubrey-bio.jpeg';
	import davePhoto from '$lib/assets/dave-bio.jpeg';
	import aliciaPhoto from '$lib/assets/alicia-bio.jpeg';
	import jayPhoto from '$lib/assets/jay-bio.jpeg';
	import BioCard from '$lib/components/BioCard.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let aubreyElement: HTMLElement;
	let aliciaElement: HTMLElement;
	let daveElement: HTMLElement;
	let jayElement: HTMLElement;

	let activeTab: string = 'band';
</script>

<svelte:head>
	<title>Waking Napster - About the Band</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div class="mx-auto flex flex-col items-center justify-center overflow-hidden pt-4">
	<h1 class="pb-4 font-chewy text-4xl text-green-500">About</h1>

	<div class="relative flex w-[min(90vw,32rem)] items-center justify-center rounded-lg bg-blue-300">
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
		<div class="animate flex flex-col items-center justify-center px-4 pt-4 lg:flex-row" in:fade>
			<img
				in:fly|global={{ delay: 100, x: 0, y: 50 }}
				loading="eager"
				srcset="
					logo/WakingNapster_no2zya_c_scale,w_320.png 320w,
					logo/WakingNapster_no2zya_c_scale,w_598.png 598w,
					logo/WakingNapster_no2zya_c_scale,w_817.png 817w,
					logo/WakingNapster_no2zya_c_scale,w_1012.png 1012w,
					logo/WakingNapster_no2zya_c_scale,w_1184.png 1184w,
					logo/WakingNapster_no2zya_c_scale,w_1353.png 1353w,
					logo/WakingNapster_no2zya_c_scale,w_1600.png 1600w"
				class="lg:1/3 h-full w-full max-w-md sm:w-2/3"
				src={logo}
				alt="Waking Napster Logo"
			/>

			<p
				in:fly|global={{ delay: 250, x: 0, y: 50 }}
				class=" max-w-[60ch] px-2 font-anybody leading-loose text-gray-800 sm:text-lg sm:leading-loose"
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
		<div in:fade class="mt-2 w-full">
			<ul class="mx-auto flex flex-col items-center justify-center pt-2">
				<li>
					<BioCard
						title="A bit of a diva"
						srcSet="
						bio-photos/aubrey-bio_pggtjj_c_scale,w_320.jpg 320w,
						bio-photos/aubrey-bio_pggtjj_c_scale,w_592.jpg 592w,
						bio-photos/aubrey-bio_pggtjj_c_scale,w_760.jpg 760w"
						name="Aubrey"
						imgSrc={aubreyPhoto}
						>Aubrey (Acoustic Aubrey) started playing classical guitar at 15 years old and
						participated in jazz bands, bluegrass jams, and developed a regionally known jazz trio
						that was renown for swing and hired by UVA for swing dances. As much fun as playing jazz
						music was, Aubrey wanted to get into a more exciting party atmosphere and build a 90’s,
						00’s party band.

						<br class="md:hidden" /><br class="md:hidden" />He enjoys taking all types of music and
						building a fun party vibe as well as join in on the fun of sharing a moment in time with
						fans of Waking Napster. When not playing music he is… playing music, working or hanging
						with the family. He is not a fan of a certain roast beef selling company that he doesn’t
						want to mention for fear of being sued.
					</BioCard>

					<hr class="mx-auto my-2 w-7/12 rounded-xl border border-dashed border-indigo-700" />
				</li>

				<IntersectionObserver element={daveElement} once let:intersecting threshold={0.4}>
					<li bind:this={daveElement} class="min-h-[10rem]">
						{#if intersecting}
							<BioCard title="Aficionado" position="right" imgSrc={davePhoto} name="Dave">
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
						{/if}

						<hr class="mx-auto my-2 w-7/12 rounded-xl border border-dashed border-indigo-700" />
					</li>
				</IntersectionObserver>

				<IntersectionObserver element={aliciaElement} once let:intersecting threshold={0.5}>
					<li bind:this={aliciaElement} class="min-h-[10rem]">
						{#if intersecting}
							<BioCard title="Unoffical Arby's spokesperson" imgSrc={aliciaPhoto} name="Alicia">
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
						{/if}

						<hr class="mx-auto my-2 w-7/12 rounded-xl border border-dashed border-indigo-700" />
					</li>
				</IntersectionObserver>
				<IntersectionObserver element={jayElement} once let:intersecting threshold={0.5}>
					<li bind:this={jayElement} class="min-h-[10rem] md:pt-0">
						{#if intersecting}
							<BioCard
								title="Hoodlum"
								srcSet="
							bio-photos/jay-bio_m53kau_c_scale,w_320.jpg 320w,
							bio-photos/jay-bio_m53kau_c_scale,w_492.jpg 492w,
							bio-photos/jay-bio_m53kau_c_scale,w_633.jpg 633w,
							bio-photos/jay-bio_m53kau_c_scale,w_754.jpg 754w,
							bio-photos/jay-bio_m53kau_c_scale,w_760.jpg 760w"
								position="right"
								imgSrc={jayPhoto}
								name="Jay"
							>
								Dredged from the murk of Lake Erie, Jay somehow found the time to hone his low-end
								craft in between lighting bottle rockets and doing ollies with his friends.
							</BioCard>
							<hr class="mx-auto my-2 w-7/12 rounded-xl border border-dashed border-indigo-700" />
						{/if}
					</li>
				</IntersectionObserver>
			</ul>
		</div>
	{/if}
</div>

<style>
</style>
