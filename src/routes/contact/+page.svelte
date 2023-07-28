<script>
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<svelte:head>
	<title>Waking Napster - Contact Us</title>
	<meta name="description" content="90s cover band in Culpeper, VA" />
</svelte:head>
<div class="w-[min(100vw,600px)] px-4">
	<div class="flex items-center justify-center">
		<h1 class="py-4 font-chewy text-4xl text-green-500">Contact Us</h1>
	</div>
	<form
		class="mx-auto flex w-full flex-col gap-y-4 font-chewy text-xl text-purple-600"
		name="contact"
		method="POST"
		data-netlify="true"
		action="/contact/success"
	>
		<div class="flex w-full flex-col gap-x-4 gap-y-4 xs:flex-row">
			<div class="flex flex-col xs:w-1/2">
				<label for="first-name">First Name</label>
				<input
					placeholder="First Name"
					class="w-full rounded-md"
					type="text"
					required
					name="first-name"
					id="first-name"
				/>
			</div>
			<div class="flex flex-col xs:w-1/2">
				<label for="last-name">Last Name</label>
				<input
					class="w-full rounded-md"
					placeholder="Last Name"
					type="text"
					required
					name="last-name"
					id="last-name"
				/>
			</div>
		</div>
		<div class="flex flex-col">
			<label for="phone">Phone Number</label>
			<input class="rounded-md" placeholder="Phone Number" type="text" name="phone" id="phone" />
		</div>
		<div class="flex flex-col">
			<label for="email">Email Address</label>
			<input
				class="rounded-md"
				type="email"
				placeholder="Email Address"
				required
				name="email"
				id="email"
			/>
		</div>
		<div class="flex flex-col">
			<label for="message">Message</label>
			<textarea
				class="min-h-[8rem] rounded-md"
				placeholder="What is the your message?"
				name="message"
				required
				id="message"
			/>
		</div>
		<div class="flex items-center justify-center">
			<button class=" rounded-md px-4 py-2" type="submit">Submit</button>
		</div>
		<input type="hidden" name="form-name" value="contact" />
	</form>
</div>

<style>
</style>
