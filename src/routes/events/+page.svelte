<script lang="ts">
	import FacebookWidget from "$lib/components/FacebookWidget.svelte";

    let screenSize: number;
    let src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23E67C73&ctz=America%2FNew_York&mode=AGENDA&showTabs=1&src=d2FraW5nbmFwc3RlckBnbWFpbC5jb20&color=%23B39DDB"
</script>
<!-- <svelte:head>
    <script async defer crossorigin="anonymous"
			src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0" nonce="jo78AhzS"></script>
</svelte:head> -->
<svelte:head>
    <title>Waking Napster - Events</title>
    <meta name="description" content="90s cover band in Culpeper, VA">
</svelte:head>
<svelte:window bind:innerWidth={screenSize}></svelte:window>
<div class="flex items-center flex-col justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Event Calendar</h1>
    <div class="flex items-center justify-center py-2">
		<iframe
        title="Waking Napster Events"
			src={src}
			style="border-width:0"
			width={screenSize <=1200 ? screenSize *.9 : screenSize *0.5}
			height="600"
			frameborder="0"
			scrolling="no"
		/>
	</div>
</div>
<!-- <Facebook Widget /> -->
