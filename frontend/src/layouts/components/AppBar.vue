<template>
	<div
		class="sticky top-0 left-0 bg-black opacity-95 flex items-center justify-between px-6 text-secondary relative"
	>
		<img
			src="~/assets/images/logo.png"
			alt="architect logo"
			class="cursor-pointer w-28 sm:w-32 2xl:w-36"
		/>
		<div>
			<NuxtLink to="/#about" class="px-4 py-3 hover:font-semibold text-white"
				>Sobre mi</NuxtLink
			>
			<NuxtLink to="/#projects" class="px-4 py-3 hover:font-semibold text-white"
				>Proyectos</NuxtLink
			>
			<NuxtLink to="/#contact" class="px-4 py-3 hover:font-semibold text-white"
				>Contacto</NuxtLink
			>
		</div>
	</div>
</template>
