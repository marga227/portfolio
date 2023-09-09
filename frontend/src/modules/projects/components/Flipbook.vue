<template>
	<div
		id="app"
		class="w-full h-full overflow-hidden"
		:class="[stylesActive]"
		@touchstart="hasMouse = false"
	>
		<Flipbook
			class="w-full h-full shadow-lg"
			:pages="images"
			:pagesHiRes="pagesHiRes"
			:startPage="pageNum"
			v-slot="flipbook"
			ref="flipbook"
			@flip-left-start="onFlipLeftStart"
			@flip-left-end="onFlipLeftEnd"
			@flip-right-start="onFlipRightStart"
			@flip-right-end="onFlipRightEnd"
			@zoom-start="onZoomStart"
			@zoom-end="onZoomEnd"
		>
			<div class="p-2 w-full h-12 flex justify-center gap-2 items-center">
				<img
					src="@/assets/icons/LeftIcon.png"
					alt="btn left"
					class="text-gray-500 text-3xl cursor-pointer bg-gray-100 rounded-full"
					:class="[stylesDisabled]"
					@click="flipbook.flipLeft"
				/>
				<img
					src="@/assets/icons/plusIcon.png"
					alt="btn plus"
					class="text-gray-500 text-3xl cursor-pointer bg-gray-100 rounded-full"
					:class="[stylesDisabled]"
					@click="flipbook.zoomIn"
				/>
				<span class="page-num text-gray-100 font-semibold">
					Página {{ flipbook.page }} de {{ flipbook.numPages }}
				</span>
				<img
					src="@/assets/icons/minusIcon.png"
					alt="btn minus"
					class="text-gray-500 text-3xl cursor-pointer bg-gray-100 rounded-full"
					:class="[stylesDisabled]"
					@click="flipbook.zoomOut"
				/>
				<img
					src="@/assets/icons/rightIcon.png"
					alt="btn right"
					class="text-gray-500 text-3xl cursor-pointer bg-gray-100 rounded-full"
					:class="[stylesDisabled]"
					@click="flipbook.flipRight"
				/>
			</div>
		</Flipbook>
	</div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue';
import Flipbook from 'flipbook-vue';

const props = defineProps({
	images: { type: Array, default: () => [] },
});

const pagesHiRes = ref([]);
const pages = ref([]);
let hasMouse = ref(true);
let pageNum = ref(null);
const flipbook = ref();
const disabled = ref(true);

const onFlipLeftStart = (page) => {
	console.log('flip-left-start', page);
};
const onFlipLeftEnd = (page) => {
	console.log('flip-left-end', page);
	window.location.hash = '#' + page;
};
const onFlipRightStart = (page) => {
	console.log('flip-right-start', page);
};
const onFlipRightEnd = (page) => {
	console.log('flip-right-end', page);
	window.location.hash = '#' + page;
};
const onZoomStart = (zoom) => {
	console.log('zoom-start', zoom);
};
const onZoomEnd = (zoom) => {
	console.log('zoom-end', zoom);
};
const setPageFromHash = () => {
	const n = parseInt(window.location.hash.slice(1), 10);
	if (isFinite(n)) pageNum.value = n;
};

const stylesActive = computed(() => {
	return hasMouse.value ? 'cursor-pointer drop-shadow-lg text-gray-500' : '';
});

const stylesDisabled = computed(() => {
	return disabled.value ? 'text-gray-500' : '';
});

onMounted(async () => {
	window.addEventListener('keydown', (ev) => {
		const flipbook = flipbook.value;
		if (!flipbook) return;
		if (ev.keyCode == 37 && flipbook.canFlipLeft) flipbook.flipLeft();
		if (ev.keyCode == 39 && flipbook.canFlipRight) flipbook.flipRight();
		disabled.value = !flipbook.canFlipLeft;
	});

	// Simulate asynchronous pages initialization
	setTimeout(() => {
		pages.value = [null, ...props.images];
		pagesHiRes.value = [null, ...props.images];
	}, 1);

	window.addEventListener('hashchange', setPageFromHash);
	setPageFromHash();
});
</script>

<style scoped>
.viewport {
	width: 100% !important;
	height: 100% !important;
}
</style>
