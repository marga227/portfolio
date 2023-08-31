// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');

export default defineNuxtConfig({
	ssr: false,
	app: {
		head: {
			title: 'Portfolio Carlos Paul',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'robots', content: 'noindex,nofollow' },
				{
					hid: 'description',
					name: 'description',
					content: 'Arquitecto | Ingeniero civil',
				},
			],
		},
	},
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_API_BASE_URL,
			strapiUrl: process.env.NUXT_STRAPI_URL,
		},
	},
	router: {
		base: '/portfolio/',
	},
	srcDir: './src',
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});
