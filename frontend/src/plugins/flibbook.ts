import Flipbook from 'flipbook-vue';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			Flipbook,
		},
	};
});
