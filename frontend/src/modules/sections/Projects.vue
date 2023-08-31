<template>
	<div class="w-full flex flex-col justify-center items-center px-1" id="mis-proyectos">
		<div class="container">
			<h2 class="text-3xl font-bold mt-8 mb-4">Mis proyectos:</h2>
			<div
				v-for="project in projects"
				:key="project.id"
				class="flex flex-wrap gap-2 mb-8"
			>
				<ProjectCard :project="project.attributes" />
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ProjectCard from '@/modules/components/ProjectCard.vue';

export default defineComponent({
	components: { ProjectCard },
	setup() {
		const { $services } = useNuxtApp();
		const router = useRouter();

		const projects = ref([]);
		const getInitialDataProjects = async () => {
			try {
				projects.value = await $services.projects.getProjects();
			} catch (error) {
				console.log(error);
			}
		};

		const baseURL = 'http://localhost:1337';

		// const getImageUrl = (attributes) => {
		// 	const { url } = attributes.image.data.attributes;
		// 	return `${baseURL}${url}`;
		// };

		// console.log(getImageUrl);

		onMounted(async () => {
			await getInitialDataProjects();
		});

		watch(getInitialDataProjects);

		return {
			projects,
		};
	},
});
</script>
