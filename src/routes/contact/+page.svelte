<script>
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<svelte:head>
	<title>Waking Napster - Contact Us</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div>
	<div class="flex items-center justify-center">
		<h1 class="py-4 font-chewy text-4xl text-green-500">Contact Us</h1>
	</div>
	<form
		class="mx-auto flex max-w-md flex-col gap-y-4 font-chewy text-xl text-purple-600"
		name="contact"
		method="POST"
		data-netlify="true"
		action="/contact/success"
	>
		<div class="flex gap-x-4">
			<div class="flex flex-col">
				<label for="first-name">First Name</label>
				<input class="w-full rounded-md" type="text" required name="first-name" id="first-name" />
			</div>
			<div class="flex flex-col">
				<label for="last-name">Last Name</label>
				<input class="w-full rounded-md" type="text" required name="last-name" id="last-name" />
			</div>
		</div>
		<div class="flex flex-col">
			<label for="phone">Phone Number</label>
			<input class="rounded-md" type="text" name="phone" id="phone" />
		</div>
		<div class="flex flex-col">
			<label for="email">Email Address</label>
			<input class="rounded-md" type="email" required name="email" id="email" />
		</div>
		<div class="flex flex-col">
			<label for="message">Message</label>
			<textarea class="min-h-[8rem] rounded-md" name="message" required id="message" />
		</div>
		<div class="flex items-center justify-center">
			<button class=" rounded-md px-4 py-2" type="submit">Submit</button>
		</div>
		<input type="hidden" name="form-name" value="contact" />
	</form>
</div>

<style>
</style>
