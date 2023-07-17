/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
		extend: {
			fontFamily: {
				chewy: "Chewy"
			}
		},
	},
  plugins: ['prettier-plugin-tailwindcss'],
}

