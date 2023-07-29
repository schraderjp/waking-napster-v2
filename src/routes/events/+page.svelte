<script lang="ts">
	type DialogData = {
		title: string;
		location: string;
		mapUrl: string;
	};

	import { Calendar } from '@fullcalendar/core';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';
	import { onMount } from 'svelte';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import listPlugin from '@fullcalendar/list';
	import { browser } from '$app/environment';
	import MdClose from 'svelte-icons/md/MdClose.svelte';

	let dialog: HTMLDialogElement;
	let dialogInfo: DialogData = {
		title: '',
		location: '',
		mapUrl: ''
	};

	let calendar: Calendar;

	function initCalendar() {
		if (!browser) return;
		const calendarEl = document.getElementById('calendar');
		calendar = new Calendar(calendarEl as HTMLElement, {
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
				input.url = '';
				if (input.title?.toLowerCase().includes('blocked')) {
					input.display = 'none';
				}

				return input;
			},
			eventClick: (info) => {
				info.jsEvent.preventDefault();
				if (!!info.event.extendedProps?.location) {
					const googleMapsUrl = encodeURI(
						'https://www.google.com/maps/search/?api=1&query=' + info.event.extendedProps.location
					);
					info.event.setExtendedProp('mapUrl', googleMapsUrl);
				}
				dialogInfo = {
					title: info.event.title,
					location: info.event.extendedProps.location,
					mapUrl: info.event.extendedProps.mapUrl ? info.event.extendedProps.mapUrl : ''
				};

				dialog.showModal();
			}
		});
		calendar.render();
	}

	onMount(() => {
		initCalendar();
		return () => {
			calendar && calendar.destroy();
		};
	});
</script>

<svelte:head>
	<title>Waking Napster - Events</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>

<div class="px-3 lg:p-0 w-[100vw] max-w-3xl">
	<div class="flex flex-col items-center justify-center w-full">
		<h1 class="py-4 font-chewy text-4xl text-green-500">Event Calendar</h1>
	</div>
	<div
		class="before: relative mx-auto mt-4 w-[min(90vw,48rem) bg-blue-200 p-2 font-lato before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:-z-20 before:w-full before:-translate-x-2 before:-translate-y-2 before:bg-pink-400 xs:p-3 sm:p-4"
		id="calendar"
	/>
	<dialog
		class="max-w-[min(70ch,90vw)] bg-pink-200 font-lato shadow-lg backdrop-filter"
		bind:this={dialog}
	>
		<button class="float-right h-10 w-10 p-2" on:click={() => dialog.close()}><MdClose /></button>

		<table>
			<tbody>
				<tr class="">
					<td class="p-4"><strong class="">Event:</strong></td>
					<td class="p-4"><p>{dialogInfo.title}</p></td>
				</tr>
				{#if !!dialogInfo.location}
					<tr>
						<td class="p-4"><strong class="">Location:</strong></td>
						<td class="p-4"
							><a
								class="text-blue-700 underline"
								href={encodeURI(
									'https://www.google.com/maps/search/?api=1&query=' + dialogInfo.location
								)}>{dialogInfo.location}</a
							></td
						>
					</tr>
				{/if}
			</tbody>
		</table>
	</dialog>
</div>

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
