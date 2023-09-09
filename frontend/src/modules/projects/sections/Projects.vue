<template>
	<div
		class="w-full flex flex-col justify-center items-center px-1 py-8"
		id="mis-proyectos"
	>
		<div class="container">
			<h3 class="text-2xl font-bold mt-8 mb-4 text-center">Mis proyectos:</h3>
			<div
				v-for="project in projects"
				:key="project.id"
				class="flex flex-wrap gap-2 mb-8 items-center justify-center"
			>
				<ProjectCard :project="project.attributes" />
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ProjectCard from '@/modules/projects/components/ProjectCard.vue';

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
