<template>
	<div class="bg-[#176585] w-full flex flex-col justify-center items-center px-1 py-16">
		<div class="max-w-xl mx-auto md:bg-white p-8 md:px-16 rounded-lg">
			<h3 class="text-3xl font-bold text-white md:text-black text-center mb-8">
				Formulario de contacto
			</h3>
			<ContactForm />
		</div>
	</div>
</template>

<script setup>
import ContactForm from '@/modules/contact/components/ContactForm.vue';
</script>
