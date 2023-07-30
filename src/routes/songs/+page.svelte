<script lang="ts">
	import smallLogo from '$lib/assets/WakingNapster6_03_open.png';
	import { fade } from 'svelte/transition';
	const fetchSheetData = async () => {
		const res = await fetch('/songs/api');
		const songs = await res.json();

		return songs;
	};

	let visible = false;
</script>

<svelte:head>
	<title>Waking Napster - Songs</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div class="relative z-10 flex flex-col items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Our Song List</h1>
	<div class="relative w-[min(90vw,46rem)] overflow-x-auto">
		{#await fetchSheetData()}
			<div
				in:fade
				out:fade={{ duration: 50 }}
				on:introstart={() => (visible = false)}
				on:outroend={() => (visible = true)}
				class="mx-auto mt-8 flex w-16 animate-bounce items-center justify-center"
			>
				<img src={smallLogo} alt="Logo loading indicator" />
			</div>
		{:then items}
			{#if visible}
				<table
					in:fade={{ delay: 100 }}
					class="z-40 w-full table-auto border-separate border-spacing-0 overflow-x-scroll whitespace-break-spaces border border-blue-300 bg-blue-100 font-lato text-xs xs:text-sm sm:text-base"
				>
					<thead>
						<tr class="sm:text-base">
							<th class="">Title</th>
							<th>Artist</th>
							<th>Genre</th>
							<th class="">Year</th>
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
			{/if}
		{:catch error}
			<p transition:fade class="red-500">Something went wrong! Please try again later.</p>
		{/await}
	</div>
</div>

<style>
	th {
		@apply max-w-max border-spacing-0 bg-blue-500 p-2 text-left font-lato text-sm  text-yellow-100;
	}

	tr {
		@apply border-spacing-0;
	}

	thead > tr:not(:last-child) > th,
	tbody > tr:not(:last-child) > td,
	tr:not(:last-child) > td,
	tr:not(:last-child) > th,
	thead:not(:last-child),
	tbody:not(:last-child) {
		@apply border-b border-blue-300;
	}
	td {
		@apply min-w-max border-spacing-0 whitespace-pre-line p-1;
	}

	td:not(:last-child),
	th:not(:last-child) {
		@apply border-r border-blue-300;
	}

	td:first-child,
	th:first-child {
		@apply pl-2;
	}

	td:last-child,
	th:last-child {
		@apply pr-2;
	}
</style>
