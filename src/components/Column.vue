<template>
	<section>
		<header>
			<h3>{{ name }}</h3>
		</header>
		<task-list
			:listId="listId" 
			:tasks="tasksList"></task-list>
	</section>
</template>

<script>
	import TaskList from "@/components/TaskList";
	import { mapActions, mapGetters } from 'vuex'

	export default {
		name: 'column',
		props: {
			listId: String,
			name: String
		},
		components: {
			TaskList
		},
		computed: {
			...mapGetters([
				'getTasksFromList'
			]),
			tasksList() {
				console.log("listId desde Column;", this.listId)
				console.log("Lista de tareas: ", this.getTasksFromList(this.listId));
				return this.getTasksFromList(this.listId)
			}
		},
		methods: {
			...mapActions([
				'fetchTasks'
			])
		},
		created() {
			console.log(this.listId)
			this.fetchTasks({ list: this.listId })
		}
	}
</script>

<style scoped>
	section {
		background-color: #eceff1;
		border-radius: 3px;
		box-shadow: 0 0 0 0.5px rgba(49,49,95,.03),
			0 2px 5px 0 rgba(49,49,95,.1),
			0 1px 2px 0 rgba(0,0,0,.08);
		margin: 1rem auto;
		padding: 1rem;
		/*width: 100%;*/
		max-width: 600px;
	}

	/*@media screen and (min-width: 600px) {
		section{
			width: calc(10% - 2rem - 2px);
		}
	}

	@media screen and (min-width: 1024px){
		section{
			width: calc(33% - 2rem - 2px);
		}
	}

	@media screen and (min-width: 1200px){
		section{
			width: calc(25% - 2rem - 2px);
		}
	}*/

	header {
		color: #37474f;
		margin: 0;
		padding-bottom: 1rem;
	}

	h3 {
		margin: 0;
	}
</style>