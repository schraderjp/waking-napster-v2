<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	export let imgSrc: string;
	export let name: string;
	export let srcSet: string = '';
	export let position: 'left' | 'right' = 'left';
	export let title = '';
</script>

<div
	in:fade|global={{ delay: 100 }}
	class="mx-auto flex max-w-max flex-col items-center justify-center px-4 py-4 md:block lg:flex lg:flex-row lg:items-center lg:justify-center"
>
	<div
		class={`photo-card relative mx-auto border-[8px] border-wn-dark-blue shadow-wn-orange xs:w-72 sm:w-96 lg:w-1/3 ${
			position === 'left'
				? 'md:float-left md:mr-6 lg:order-1 lg:float-none lg:ml-0'
				: 'md:float-right md:ml-6 lg:order-2 lg:float-none lg:mr-0'
		} md:mb-2  md:w-60`}
	>
		<img width="720" height="760" class="" srcset={srcSet} src={imgSrc} alt={name} {title} />
		<h2
			class="absolute left-0 right-0 top-0 bg-black bg-opacity-60 py-2 text-center font-chewy text-3xl text-wn-yellow"
		>
			{name}
		</h2>
	</div>
	<p
		class={`max-w-2/3 mt-4 h-max hyphens-auto px-2 text-left font-anybody leading-loose md:mt-0 lg:w-[70ch] lg:text-xl lg:leading-loose ${
			position === 'left' ? 'lg:order-2' : 'lg:order-1'
		}`}
	>
		<slot />
	</p>
</div>

<style>
	.photo-card {
		box-shadow: 6px 6px 0px #d30ce1;
	}
</style>
