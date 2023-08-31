<template>
	<div>
		<div
			class="rounded-lg border border-gray-300 p-8 max-w-[300px] cursor-pointer"
			@click="handleBookModal"
		>
			<p>{{ project.title }}</p>
			<p class="truncate">{{ project.description }}</p>
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
import BookModal from '@/modules/modals/BookModal.vue';

const props = defineProps({
	project: { type: Object, default: () => {} },
});

const images = ref([]);
let showBookModal = ref(false);
onMounted(() => {
	const photosBySections = props.project.Photos.map((photo) => photo.image.data);
	const photos = photosBySections.flat();
	images.value = photos.map((photo) => photo.attributes.url);
});

const handleBookModal = () => {
	showBookModal.value = !showBookModal.value;
};
</script>
