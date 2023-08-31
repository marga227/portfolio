import { unref } from 'vue';
import { useFetch } from '#app';

export async function useFetchAPI(path, options) {
	const config = useRuntimeConfig();
	const res = await useFetch(path, {
		...options,
		baseURL: config.public.apiBase,
		initialCache: false,
		credentials: 'include',
	});
	return {
		data: unref(res.data),
		error: unref(res.error),
	};
}
