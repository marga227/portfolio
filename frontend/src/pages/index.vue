<template>
	<BaseLayout>
		<div
			class="h-screen bg-gray-100 w-full flex flex-col justify-center items-center px-1"
		>
			<div class="container">
				<p class="text-xl font-medium">Carlos Paul</p>
				<h1 class="text-5xl font-bold mb-4">Ingeniería | Arquitectura</h1>
				<p>
					Hola, soy Carlos Paul. Soy un apasionado arquitecto e ingeniero civil con una
					sólida formación y experiencia en el diseño y construcción de proyectos
					innovadores y funcionales. Mi enfoque multidisciplinario me permite combinar la
					estética arquitectónica con la viabilidad técnica, creando soluciones integrales
					que resuelven desafíos complejos en el entorno construido.
				</p>
				<div class="mt-8 flex gap-4 self-start">
					<button class="rounded-full bg-black text-white p-4">Contáctame</button>
					<button class="underline font-medium">Descargar CV</button>
				</div>
			</div>
		</div>
		<Projects />
	</BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout';
import Projects from '@/modules/sections/Projects.vue';

export default defineComponent({
	components: { BaseLayout, Projects },
});
</script>
