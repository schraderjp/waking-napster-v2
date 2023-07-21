<script lang="ts">
	let screenSize: number;
	export let data: { pathname: string; rows: string[][] };
</script>

<svelte:head>
	<title>Waking Napster - Songs</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<svelte:window bind:innerWidth={screenSize} />
<div class="relative z-10 flex flex-col items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Our Song List</h1>
	<div class="relative">
		<div
			class="absolute bottom-0 left-0 right-0 top-0 -z-20 -translate-x-2 translate-y-2 rounded-lg bg-green-300"
		/>
		<table
			class="z-40 max-w-[min(90vw,46rem)] table-auto border-separate border-spacing-0 rounded-lg border border-blue-300 bg-blue-100 font-lato"
		>
			<thead>
				<tr class="rounded-lg">
					<th class="rounded-tl-lg">Song Title</th>
					<th>Artist</th>
					<th>Genre</th>
					<th class="rounded-tr-lg">Release Year</th>
				</tr>
			</thead>
			<tbody>
				{#each data.rows as song}
					<tr>
						<td>{song[0] ? song[0] : ''}</td>
						<td>{song[1] ? song[1] : ''}</td>
						<td>{song[2] ? song[2] : ''}</td>
						<td>{song[3] ? song[3] : ''}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	th {
		@apply border-spacing-0 bg-blue-500 p-2 text-left font-lato text-xl text-yellow-100;
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
		@apply border-spacing-0 p-2;
	}

	td:not(:last-child),
	th:not(:last-child) {
		@apply border-r border-blue-300;
	}

	td:first-child,
	th:first-child {
		@apply pl-4;
	}

	td:last-child,
	th:last-child {
		@apply pr-2;
	}
</style>
