<script>
	export const prerender = true;
</script>

<svelte:head>
	<title>Waking Napster - Contact Us</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div class="flex items-center justify-center">
	<h1 class="py-4 font-chewy text-4xl text-green-500">Contact Us</h1>
</div>
<form
	class="mx-auto flex max-w-md flex-col gap-y-4 font-chewy text-xl text-purple-600"
	name="contact"
	method="POST"
	data-netlify="true"
>
	<div class="flex flex-col">
		<label for="name">Name</label>
		<input class="rounded-md" type="text" name="name" id="name" />
	</div>
	<div class="flex flex-col">
		<label for="email">Email Address</label>
		<input class="rounded-md" type="email" name="email" id="email" />
	</div>
	<div class="flex flex-col">
		<label for="message">Message</label>
		<input class="min-h-[8rem] rounded-md" type="text" name="message" id="message" />
	</div>
	<div class="flex items-center justify-center">
		<button
			class="rounded-md border border-purple-600 bg-purple-200 px-4 py-2 transition-all hover:brightness-110 active:scale-90"
			type="submit">Submit</button
		>
	</div>
	<input type="hidden" name="form-name" value="contact" />
</form>
