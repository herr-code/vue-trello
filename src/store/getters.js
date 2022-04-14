export default {
	getListsByBoard: (state) => (boardId) => {
		return Object.values(state.lists)
			.filter(list => list.board === boardId)
	},
	getTasksFromList: (state) => (listId) => {
		// console.log("listId desde getters", listId)
		// console.log("state task", state.tasks)
		return Object.values(state.tasks)
			.filter(task => task.list === listId)
	}
}