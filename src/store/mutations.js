import * as types from './mutations-types'
// import * as Vue from 'vue'

export default {

	//Mutaciones asincronas
	// Fetch de los paneles creados por el usuario
	[types.FETCH_BOARDS_REQUEST] (state) {
		state.fetchingData = true,
		state.error = null
	},
	[types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
		state.fetchingData = false,
		state.error = null,
		state.boards = { ...boards }
	},
	[types.FETCH_BOARDS_FAILURE] (state, { error }) {
		state.fetchingData = false,
		state.error = error
	},

	//fetch de las listas de un determinado panel 
	[types.FETCH_LISTS_REQUEST] (state) {
		state.fetchingData = true,
		state.error = null
	},
	[types.FETCH_LISTS_SUCCESS] (state, { lists }) {
		state.fetchingData = false,
		state.error = null,
		state.lists = { ...lists }
	},
	[types.FETCH_LISTS_FAILURE] (state, { error }) {
		state.fetchingData = false,
		state.error = error
	},

	//fetch de las tareas correspondientes a una lista
	[types.FETCH_TASKS_REQUEST] (state) {
		state.fetchingData = true,
		state.error = null
	},
	[types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
		state.fetchingData = false,
		state.error = null,
		// state.tasks = { ...tasks }
		// console.log("tasks desde mutations", tasks)
		state.tasks = Object.assign({}, state.tasks, tasks)
	},
	[types.FETCH_TASKS_FAILURE] (state, { error }) {
		state.fetchingData = false,
		state.error = error
	},

	//Mutaciones sincronas

	//Crear un nuevo panel
	[types.ADD_BOARD] (state, {board}) {
		// console.log("Board desde muatations", board)
		// this.state.boards[board.id], board)
		state.boards[board.id] = board
	},

	//crear nueva ista de  tareas
	[types.ADD_COLUMN] (state, {column}) {
		// this.$set(state.lists, column.id, column)
		state.lists[column.id] = column
	},

	//Añadir nueva tarea a una lista
	//crear nueva ista de  tareas
	[types.ADD_TASK] (state, {task}) {
		// this.$set(state.tasks, task.id, task)
		state.tasks[task.id] = task
	},

	//borrar una tarea de una lista de tareas
	[types.DELETED_TASK] (state, { taskId }) {
		state.tasks = Object.values(state.tasks)
			.filter(task => task.id !== taskId)
	},

	//Marca como completada una tarea
	[types.MARK_AS_COMPLETED](state, {task}) {
		task.completed = !task.completed
	}
}