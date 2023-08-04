<script lang="ts">
	import { fade } from 'svelte/transition';
	import TiArrowSortedDown from 'svelte-icons/ti/TiArrowSortedDown.svelte'
	import TiArrowSortedUp from 'svelte-icons/ti/TiArrowSortedUp.svelte'
	import TiArrowUnsorted from 'svelte-icons/ti/TiArrowUnsorted.svelte'
	import { sort } from 'fast-sort';
	import FaSortDown from 'svelte-icons/fa/FaSortDown.svelte';
	import FaSortUp from 'svelte-icons/fa/FaSortUp.svelte';
	import FaSort from 'svelte-icons/fa/FaSort.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	function getFilteredSongs(items: string[][], text: string) {
		const filteredSongs = items.filter((item) => {
			if (item[0] && item[0].toLowerCase().includes(text.toLowerCase())) return true;
			if (item[1] && item[1].toLowerCase().includes(text.toLowerCase())) return true;
			if (item[2] && item[2].toLowerCase().includes(text.toLowerCase())) return true;
			if (item[3] && item[3].toLowerCase().includes(text.toLowerCase())) return true;
		});

		return filteredSongs;
	}

	function setFilter(index: number) {
		return () => {
			filterOrder === 'asc' ? (filterOrder = 'desc') : (filterOrder = 'asc');
			filterIndex = index;
		};
	}
	$:filteredItems = getFilteredSongs(data.data.rows, filterText);
	$:filteredSongs =
					filterOrder === 'asc'
						? sort(filteredItems).desc((song) => song[filterIndex])
						: sort(filteredItems).asc((song) => song[filterIndex])

	let filterOrder: string = 'desc';
	let filterIndex: number = 0;
	let filterText = '';
	$: filterText, filterOrder;
</script>

<svelte:head>
	<title>Waking Napster - Songs</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div class="animate relative z-10 flex flex-col items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Our Song List</h1>
	<div class="relative w-[min(90vw,46rem)] overflow-x-auto">
		
				<div class="flex h-full w-full items-center justify-center pt-2">
					<input
						class="mx-auto mb-2 w-11/12 rounded-md font-lato text-blue-900"
						bind:value={filterText}
						type="text"
						placeholder="Search for a song"
					/>
				</div>
				<table
					in:fade={{ delay: 100 }}
					class="z-40 w-full table-auto border-separate border-spacing-0 overflow-x-scroll whitespace-break-spaces border border-blue-300 bg-blue-100 font-lato text-xs xs:text-sm sm:text-base"
				>
					<thead class="w-full">
						<tr class="sm:text-base">
							<th
								class="cursor-pointer select-none hover:brightness-110 active:brightness-110"
								on:click={setFilter(0)}
							>
								<div class="flex items-center justify-between">
									<div>Title</div>
									<div class="h-6 w-6">
										{#if filterOrder === 'asc' && filterIndex === 0}
											<TiArrowSortedDown />
										{:else if filterOrder === 'desc' && filterIndex === 0}
											<TiArrowSortedUp />{:else}
											<TiArrowUnsorted />
										{/if}
									</div>
								</div>
							</th>
							<th
								class="cursor-pointer select-none hover:brightness-110 active:brightness-110"
								on:click={setFilter(1)}
								><div class="flex items-center gap-x-2 justify-between">
									<div>Artist</div>
									<div class="h-6 w-6 flex-shrink-0">
										{#if filterOrder === 'asc' && filterIndex === 1}
											<TiArrowSortedDown />
										{:else if filterOrder === 'desc' && filterIndex === 1}
											<TiArrowSortedUp />
										{:else}
											<TiArrowUnsorted />
										{/if}
									</div>
								</div></th
							>
							<th
								class="cursor-pointer select-none hover:brightness-110 active:brightness-110"
								on:click={setFilter(2)}
								><div class="flex items-center justify-between">
									<div>Genre</div>
									<div class="h-6 w-6">
										{#if filterOrder === 'asc' && filterIndex === 2}
											<TiArrowSortedDown />
										{:else if filterOrder === 'desc' && filterIndex === 2}
											<TiArrowSortedUp />{:else}
											<TiArrowUnsorted />
										{/if}
									</div>
								</div></th
							>
							<th
								class="cursor-pointer select-none hover:brightness-110 active:brightness-110"
								on:click={setFilter(3)}
								><div class="flex items-center gap-x-2 justify-between pr-2">
									<div>Year</div>
									<div class="h-6 w-6 flex-shrink-0">
										{#if filterOrder === 'asc' && filterIndex === 3}
											<TiArrowSortedDown />
										{:else if filterOrder === 'desc' && filterIndex === 3}
											<TiArrowSortedUp />{:else}
											<TiArrowUnsorted />
										{/if}
									</div>
								</div></th
							>
						</tr>
					</thead>
					<tbody>
						{#if filteredSongs}
							{#each filteredSongs as song}
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
