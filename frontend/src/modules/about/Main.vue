<template>
	<div class="h-screen w-full flex flex-col justify-center items-center px-1">
		<div class="container flex flex-col gap-32">
			<Title />
			<ActionsButtons />
		</div>
	</div>
</template>

<script setup>
import ActionsButtons from '@/modules/about/components/ActionsButtons.vue';
import Title from '@/modules/about/components/Title.vue';
</script>
