<script lang="ts">
	type DialogData = {
		title: string;
		location: string;
	};

	let screenSize: number;
	let src =
		'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E67C73&ctz=America%2FNew_York&mode=AGENDA&showTabs=1&src=d2FraW5nbmFwc3RlckBnbWFpbC5jb20&color=%23B39DDB';
	import { Calendar } from '@fullcalendar/core';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';
	import { onMount } from 'svelte';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import listPlugin from '@fullcalendar/list';
	import { browser } from '$app/environment';
	import { Input } from 'postcss';
	import MdClose from 'svelte-icons/md/MdClose.svelte';
	import { fade } from 'svelte/transition';

	let dialog: HTMLDialogElement;
	let dialogInfo: DialogData = {
		title: '',
		location: ''
	};

	onMount(() => {
		if (!browser) return;
		const calendarEl = document.getElementById('calendar');
		const calendar = new Calendar(calendarEl as HTMLElement, {
			plugins: [googleCalendarPlugin, dayGridPlugin, listPlugin],
			googleCalendarApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
			initialView: 'listMonth',

			titleFormat: { year: 'numeric', month: 'short' },
			headerToolbar: {
				start: 'title',
				center: 'today',
				end: 'prev,next'
			},
			buttonText: {
				today: 'Today',
				month: 'month',
				week: 'week',
				day: 'day',
				list: 'list'
			},
			contentHeight: 'auto',
			events: {
				googleCalendarId: 'wakingnapster@gmail.com'
			},
			eventDataTransform(input) {
				console.log(input);
				if (input.title?.toLowerCase().includes('blocked')) {
					input.display = 'none';
				}
				return input;
			},
			eventClick: (info) => {
				info.jsEvent.preventDefault();
				dialogInfo = {
					title: info.event.title,
					location: info.event.extendedProps.location
				};
				dialog.showModal();
			}
		});
		calendar.render();
	});
</script>

<svelte:head>
	<title>Waking Napster - Events</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<svelte:window bind:innerWidth={screenSize} />

<div class="flex flex-col items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Event Calendar</h1>
</div>
<div
	class="h- relative mx-auto mt-4 max-w-3xl rounded-lg bg-blue-200 p-4 font-lato before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-20 before:w-full before:-translate-x-2 before:-translate-y-2 before:rounded-lg before:bg-pink-400"
	id="calendar"
/>
<dialog
	transition:fade
	class="rounded-lg bg-pink-200 font-lato shadow-lg backdrop-filter"
	bind:this={dialog}
>
	<button class="float-right h-10 w-10 pr-2 pt-2" on:click={() => dialog.close()}
		><MdClose /></button
	>

	<table>
		<tbody>
			<tr>
				<td class="pt-4"><strong class="px-4">Event:</strong></td>
				<td><p class="pr-4 pt-4">{dialogInfo.title}</p></td>
			</tr>
			<tr>
				<td><strong class="px-4">Location:</strong></td>
				<td><p class="pb-4 pr-4">{dialogInfo.location}</p></td>
			</tr>
		</tbody>
	</table>
</dialog>

<style>
	td {
		vertical-align: top;
	}

	dialog::backdrop,
	dialog {
		backdrop-filter: blur(8px) brightness(50%);
		-webkit-backdrop-filter: blur(8px);
	}
</style>
