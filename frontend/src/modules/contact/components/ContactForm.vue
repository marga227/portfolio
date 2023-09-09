<template>
	<form @submit.prevent="submitForm" class="mx-auto max-w-lg">
		<div class="w-full mb-4">
			<label for="name" class="text-gray-600 text-lg">Nombre</label>
			<input
				v-model="formData.name"
				type="text"
				id="name"
				name="name"
				class="w-full p-2 border border-gray-600 outline-none"
			/>
			<span v-if="errors.name" class="error">{{ errors.name[0] }}</span>
		</div>

		<div class="w-full mb-4">
			<label for="email" class="text-gray-600 text-lg">Correo Electrónico</label>
			<input
				v-model="formData.email"
				type="email"
				id="email"
				name="email"
				class="w-full p-2 border border-gray-600 outline-none"
			/>
			<span v-if="errors.email" class="error">{{ errors.email[0] }}</span>
		</div>

		<div class="w-full mb-4">
			<label for="message" class="text-gray-600 text-lg">Mensaje</label>
			<textarea
				v-model="formData.message"
				id="message"
				name="message"
				class="w-full p-2 border border-gray-600 outline-none"
			></textarea>
			<span v-if="errors.message" class="error">{{ errors.message[0] }}</span>
		</div>

		<button
			type="submit"
			class="rounded-full bg-black text-white p-4 px-12 block mx-auto hover:font-bold"
		>
			Enviar
		</button>
	</form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
	setup() {
		const formData = {
			name: '',
			email: '',
			message: '',
		};

		const rules = {
			name: { required },
			email: { required, email },
			message: { required },
		};

		const { value: errors, handleSubmit } = useVuelidate(rules, formData, submitForm);

		function submitForm() {
			console.log('Formulario enviado:', formData);
		}

		return { formData, errors, handleSubmit };
	},
};
</script>

<style scoped>
.form-group {
	margin-bottom: 20px;
}

.error {
	color: red;
}
</style>
