/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/shared/**/*.{vue,js,ts}',
		'./src/sections/**/*.{vue,js,ts}',
		'./src/layouts/**/*.{vue,js,ts}',
		'./src/pages/**/*.{vue,js,ts}',
		'./src/components/**/*.{vue,js,ts}',
		'./src/modules/**/*.{vue,js,ts}',
		'./src/plugins/**/*.ts',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
