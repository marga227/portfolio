/* eslint-disable no-undef */
// import useFetchAPI from '"@/composables/useFetchAPI.js';

const NUXT_API_BASE_URL = 'http://localhost:1337/api';

export default class ProjectsService {
	getProjects = async () => {
		let endpoint = `/projects?populate[Photos][populate]=*`;
		const {
			data: { data },
		} = await useFetchAPI(endpoint);
		return data;
	};
}
