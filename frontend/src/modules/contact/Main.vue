<template>
	<div class="w-full flex flex-col justify-center items-center px-1 py-8">
		<div class="container">
			<h3 class="font-semibold text-2xl text-center">Formulario de contacto</h3>
			<ContactForm />
		</div>
	</div>
</template>

<script setup>
import ContactForm from '@/modules/contact/components/ContactForm.vue';
</script>
