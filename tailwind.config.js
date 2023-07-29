const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				chewy: "Chewy",
				lato: "Lato",
				anybody: "Anybody Variable"
			},
			colors: {
				'wn-light-pink': '#dd909c',
				'wn-dark-pink': '#fb76ac',
				'wn-yellow': '#fde451',
				'wn-sea-green': '#54b1ad',
				'wn-dark-blue': '#414fc6',
				'wn-red': '#cc5445',
				'wn-orange': '#e9a123',
				'wn-light-blue': '#87c8cf',
				'wn-lavender': '#7287c1',
				
			}	
		},
		screens: {
			'xs': '475px',
			...defaultTheme.screens,
		}
	},
	plugins: ['prettier-plugin-tailwindcss', require('@tailwindcss/forms')],
}

