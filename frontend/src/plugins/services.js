import ProjectsService from '../services/projectsService';

export default defineNuxtPlugin((nuxtApp) => {
	const services = {
		projects: new ProjectsService(),
	};
	nuxtApp.provide('services', services);
});
