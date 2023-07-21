<script lang="ts">
	import type { PageData } from './$types';
	import smallLogo from '$lib/assets/WakingNapster6_03_open.png';

	let screenSize: number;
	export let data: PageData;
</script>

<svelte:head>
	<title>Waking Napster - Songs</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<svelte:window bind:innerWidth={screenSize} />
<div class="relative z-10 flex flex-col items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Our Song List</h1>
	<div class="relative w-[min(90vw,46rem)] overflow-x-auto">
		<div
			class="absolute bottom-0 left-0 right-0 top-0 -z-20 h-max -translate-x-2 translate-y-2 rounded-lg bg-green-300"
		/>
		{#await data.streamed.sheetTest}
			<div class="mx-auto mt-8 flex w-16 animate-bounce items-center justify-center">
				<img src={smallLogo} alt="Logo loading indicator" />
			</div>
		{:then items}
			<table
				class="z-40 w-full table-auto border-separate border-spacing-0 overflow-x-scroll whitespace-break-spaces rounded-lg border border-blue-300 bg-blue-100 font-lato text-xs xs:text-sm sm:text-base"
			>
				<thead>
					<tr class="rounded-lg sm:text-base">
						<th class="rounded-tl-lg">Title</th>
						<th>Artist</th>
						<th>Genre</th>
						<th class="rounded-tr-lg">Year</th>
					</tr>
				</thead>
				<tbody>
					{#if items}
						{#each items as song}
							<tr>
								<td>{song[0] ? song[0] : ''}</td>
								<td>{song[1] ? song[1] : ''}</td>
								<td>{song[2] ? song[2] : ''}</td>
								<td>{song[3] ? song[3] : ''}</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		{:catch error}
			{error}
		{/await}
	</div>
</div>
