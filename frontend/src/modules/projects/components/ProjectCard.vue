<template>
	<div>
		<div
			class="rounded-lg max-w-[350px] cursor-pointer overflow-hidden hover:scale-105"
			@click="handleBookModal"
		>
			<img :src="coverImage" alt="Portada del proyecto" />
			<div class="bg-[#f5f5f5] p-4 py-8">
				<p class="mb-4 font-medium">{{ project.title }}</p>
				<p class="line-clamp-3">{{ project.description }}</p>
			</div>
			<BookModal
				v-if="showBookModal"
				:open="showBookModal"
				@close="handleBookModal"
				:images="images"
			/>
		</div>
	</div>
</template>

<script setup>
import { watch, onMounted, ref } from 'vue';
import BookModal from '@/modules/projects/modals/BookModal.vue';

const props = defineProps({
	project: { type: Object, default: () => {} },
});

const images = ref([]);

let showBookModal = ref(false);

const coverImage = computed(() => {
	return props.project.cover.data.attributes.url;
});
onMounted(() => {
	const photosBySections = props.project.Photos.map((photo) => photo.image.data);
	const photos = photosBySections.flat();
	images.value = photos.map((photo) => photo.attributes.url);
});

const handleBookModal = () => {
	showBookModal.value = !showBookModal.value;
};
</script>
