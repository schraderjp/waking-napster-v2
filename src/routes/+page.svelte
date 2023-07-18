<script>
    import bandPhoto from '$lib/assets/image1.jpeg';
    import Youtube from "svelte-youtube-embed";
</script>
<svelte:head>
    <title>Waking Napster</title>
    <meta name="description" content="90s cover band in Culpeper, VA">
</svelte:head>
<div class="flex flex-col  md:flex-row items-center gap-x-8 justify-center mt-2 px-4 relative">
    <img class="lg:max-w-md w-4/5 my-4 rounded-md shadow-lg" src={bandPhoto} alt="artistic representation of Waking Napster band members" />
    <div class="mt-8 mx-2 lg:max-w-md w-4/5 p-4 relative flex items-center justify-center">
        <p class="z-10 font-bold text-2xl rounded-xl bg-purple-700 font-lato text-yellow-200 p-4 leading-loose">      A cover band playing a wide mix of songs you "allegedly" downloaded to
            your Napster library back in the day.</p>
        <div class="rotate-3 rounded-xl absolute top-0 left-0 right-0 bottom-0 bg-pink-400"></div>
        <div class="rotate-3 rounded-xl -translate-x-2 -translate-y-2 absolute top-0 left-0 right-0 bottom-0 bg-green-400"></div>
        <div class="absolute -rotate-3 rounded-xl -translate-x-1 top-2 left-2 right-2 bottom-2 bg-indigo-300"></div>
        
    </div>
</div>
<div class="flex items-center justify-center w-[min(95vw,64rem)] lg:w-3/5 mx-auto rounded-xl py-6 bg-teal-400">
    <div class="max-w-[min(42rem,90vw)] flex-grow flex-shrink-0 px-4 my-4 rounded-md">
        <!-- <h2 class="text-center mb-4 text-3xl font-lato font-bold ">2022 Promo Video</h2> -->
        <Youtube id="1ep1KKOEX0Q" />
    </div>
</div>
