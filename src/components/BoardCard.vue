<template>
  <router-link class="board-card" :to="{ name: 'board', params: { name, id }}">
  	<span class="board-card-title">{{ name }}</span>
  </router-link>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'board-card',
  props: {
  	id: String,
  	name: String
  }
}
</script>

<style scoped>
	.board-card {
		background-color: #546e7a;
		box-shadow: 0 0 0 0.5px rgba(49,49,95,.03),
			0 2px 5px 0 rgba(49,49,93,.1),
			0 1px 2px 0 rgba(0,0,0,.08);
		border-radius: 5px;
		color: #fafafa;
		margin: 0.5rem 1.5rem;
		padding: 1rem;
		text-align: left;
		text-decoration: none;
		transition: all 600ms ease;
		width: 100%;
		height: 100px;
	}
	.board-card-title {
		font-size: 1.2rem;
	}
	.board-card-title {
		background-color: #90a4a0;
		font-weight: bold;
	}

	@media screen and (min-width: 600px) {
		.board-card{
			width: 33%;
		}
	}

	@media screen and (min-width: 1024px){
		.board-card{
			width: 250px;
		}
	}
</style>
