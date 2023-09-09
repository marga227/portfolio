<template>
	<div class="h-screen">
		<div
			class="bg-[#176585] w-[100%] sm:w-[50%] md:w-[40%] min-h-screen flex flex-col justify-evenly sm:items-center"
		>
			<Title />
			<ActionsButtons />
		</div>
	</div>
</template>

<script setup>
import ActionsButtons from '@/modules/about/components/ActionsButtons.vue';
import Title from '@/modules/about/components/Title.vue';
</script>
