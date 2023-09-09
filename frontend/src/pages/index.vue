<template>
	<BaseLayout>
		<div
			class="-mt-0.5 bg-[url('@/assets/images/bg.svg')] bg-no-repeat bg-cover h-auto w-full"
		>
			<div class="container">
				<About />
			</div>
		</div>
		<Projects />
		<ContactForm />
		<Footer />
	</BaseLayout>
</template>

<script setup>
import BaseLayout from '@/layouts/BaseLayout';
import Projects from '@/modules/projects/Main.vue';
import About from '@/modules/about/Main.vue';
import ContactForm from '@/modules/contact/Main.vue';
import Footer from '@/layouts/components/Footer.vue';
</script>
