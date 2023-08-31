<template>
	<Teleport to="body">
		<div
			v-if="open"
			ref="modal"
			class="fixed inset-6 sm:inset-0 z-[50] flex justify-center items-center"
			role="dialog"
		>
			<div class="z-[50] bg-white w-[90vw] h-[80vh]">
				<div class="relative flex justify-end z-[60] cursor-pointer">
					<img
						src="@/assets/icons/CloseIcon.png"
						alt="close icon"
						@click="$emit('close')"
					/>
				</div>
				<Flipbook :images="images" />
			</div>
			<span class="fixed inset-0 bg-black opacity-70"></span>
		</div>
	</Teleport>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed } from 'vue';
import Flipbook from '@/modules/components/Flipbook.vue';

const props = defineProps({
	open: { type: Boolean, default: false },
	title: { type: String, default: '' },
	images: { type: Array, default: () => [] },
});
const modal = ref(null);

const close = () => {
	emit('close', false);
};

const handleEnter = (bannerElement) => {
	const transformAnimation = {
		top: 'translateY(-100%)',
		bottom: 'translateY(100%)',
		left: 'translateX(-100%)',
		right: 'translateX(100%)',
	}[props.animation];

	if (bannerElement) {
		if (
			props.top === '' &&
			props.left === '' &&
			props.right === '' &&
			props.left === ''
		) {
			bannerElement.style.top = '0px';
			bannerElement.style.left = '0px';
			return;
		}

		bannerElement.style.top = props.top;
		bannerElement.style.left = props.left;
		bannerElement.style.right = props.right;
		bannerElement.style.bottom = props.bottom;

		bannerElement.animate([{ transform: transformAnimation }, { transform: 'none' }], {
			duration: 1000,
		});
	}
};

onMounted(() => {
	console.log(props.open);
	// console.log(modal.value);
	// handleEnter(modal.value);
});
</script>
