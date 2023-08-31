<template>
	<client-only>
		<div class="relative flex flex-col min-h-screen">
			<AppBar />
			<slot></slot>
		</div>
	</client-only>
</template>

<script>
import AppBar from './components/AppBar';

export default {
	name: 'BaseLayout',
	components: {
		AppBar,
	},
};
</script>
