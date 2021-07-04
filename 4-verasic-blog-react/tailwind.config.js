const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			amber: colors.amber,
			orange: colors.orange,
			sky: colors.sky,
			blue: colors.blue
		},
		extend: {
			fontFamily: {
				head: [
					'Montserrat',
					'Roboto',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'sans-serif'
				],
				text: [
					'Roboto',
					'Montserrat',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'sans-serif'
				],
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
	]
};
