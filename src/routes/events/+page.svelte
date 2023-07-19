<script lang="ts">
	let screenSize: number;
	let src =
		'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E67C73&ctz=America%2FNew_York&mode=AGENDA&showTabs=1&src=d2FraW5nbmFwc3RlckBnbWFpbC5jb20&color=%23B39DDB';
	import { Calendar } from '@fullcalendar/core';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';
	import { onMount } from 'svelte';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import listPlugin from '@fullcalendar/list';
	import { browser } from '$app/environment';

	onMount(() => {
		if (!browser) return;
		const calendarEl = document.getElementById('calendar');
		const calendar = new Calendar(calendarEl as HTMLElement, {
			plugins: [googleCalendarPlugin, dayGridPlugin, listPlugin],
			googleCalendarApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
			initialView: 'listWeek',
			events: {
				googleCalendarId: 'wakingnapster@gmail.com'
			},
			eventDataTransform(input) {
				console.log(input);
				if (input.title === 'BLOCKED') {
					input.display = 'none';
				}
				return input;
			},
			eventSourceSuccess(eventsInput, response) {
				console.log(eventsInput[0].title);
				const filteredItems = eventsInput.filter((item) => {
					return item.title !== 'BLOCKED';
				});
			}
		});
		calendar.render();
	});
</script>

<!-- <svelte:head>
    <script async defer crossorigin="anonymous"
			src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0" nonce="jo78AhzS"></script>
</svelte:head> -->
<svelte:head>
	<title>Waking Napster - Events</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<svelte:window bind:innerWidth={screenSize} />

<div class="flex flex-col items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Event Calendar</h1>
</div>
<div class="max-w-3xl mt-4 before:absolute before:-z-20 before:w-full before:-translate-x-2 before:-translate-y-2 before:rounded-lg before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-pink-400 mx-auto bg-blue-200 p-4 rounded-lg font-lato relative" id="calendar" />
<!-- <Facebook Widget /> -->
