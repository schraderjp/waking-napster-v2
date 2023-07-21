const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				chewy: "Chewy",
				lato: "Lato"
			}
		},
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		}
	},
	plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/forms')],
}

