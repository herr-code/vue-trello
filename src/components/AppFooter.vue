<template>
	<footer>
		<span>Made with ❤. Powered by <a href="https://vuejs.org/">Vue js.</a> in México.</span>
	</footer>
</template>

<script>
	export default {
		name: 'app-footer'
	}
</script>

<style scoped>
	footer {
		background-color: #cfd8dc;
		position: absolute;
		bottom: 0;
		padding: 1rem;
		width: 100%;
	}

	a{
		text-decoration: none;
		color: #546e7a;
	}
	
</style>