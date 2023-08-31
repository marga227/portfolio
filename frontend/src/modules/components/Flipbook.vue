<template>
	<div id="app" :class="{ 'has-mouse': hasMouse }" @touchstart="hasMouse = false">
		<Flipbook
			class="flipbook"
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
			<div class="action-bar">
				<img
					src="@/assets/icons/LeftIcon.png"
					alt="btn left"
					class="btn left cursor-pointer"
					:class="{ disabled: !flipbook.canFlipLeft }"
					@click="flipbook.flipLeft"
				/>
				<img
					src="@/assets/icons/plusIcon.png"
					alt="btn plus"
					class="btn plus cursor-pointer"
					:class="{ disabled: !flipbook.canZoomIn }"
					@click="flipbook.zoomIn"
				/>
				<span class="page-num">
					Página {{ flipbook.page }} de {{ flipbook.numPages }}
				</span>
				<img
					src="@/assets/icons/minusIcon.png"
					alt="btn minus"
					class="btn minus cursor-pointer"
					:class="{ disabled: !flipbook.canZoomOut }"
					@click="flipbook.zoomOut"
				/>
				<img
					src="@/assets/icons/rightIcon.png"
					alt="btn right"
					class="btn right"
					:class="{ disabled: !flipbook.canFlipRight }"
					@click="flipbook.flipRight"
				/>
			</div>
		</Flipbook>
	</div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Flipbook from 'flipbook-vue';

const props = defineProps({
	images: { type: Array, default: () => [] },
});

const pagesHiRes = ref([]);
const pages = ref([]);
let hasMouse = ref(true);
let pageNum = ref(null);
const flipbook = ref();

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

onMounted(async () => {
	window.addEventListener('keydown', (ev) => {
		const flipbook = flipbook.value;
		if (!flipbook) return;
		if (ev.keyCode == 37 && flipbook.canFlipLeft) flipbook.flipLeft();
		if (ev.keyCode == 39 && flipbook.canFlipRight) flipbook.flipRight();
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

<style>
.action-bar {
	width: 100%;
	height: 30px;
	padding: 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
}

.action-bar .btn {
	font-size: 30px;
	color: #999;
}

.action-bar .btn svg {
	bottom: 0;
}

.action-bar .btn:not(:first-child) {
	margin-left: 10px;
}

.has-mouse .action-bar .btn:hover {
	color: #ccc;
	filter: drop-shadow(1px 1px 5px #000);
	cursor: pointer;
}

.action-bar .btn:active {
	filter: none !important;
}

.action-bar .btn.disabled {
	color: #666;
	pointer-events: none;
}

.action-bar .page-num {
	font-size: 12px;
	margin-left: 10px;
}

.flipbook .viewport {
	width: 90vw !important;
	height: calc(100vh - 50px - 40px) !important;
}

.flipbook .bounding-box {
	box-shadow: 0 0 20px #000;
}

.credit {
	font-size: 12px;
	line-height: 20px;
	margin: 10px;
}
</style>
