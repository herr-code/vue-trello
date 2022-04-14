<template>
  <div class="home">
    <h3>Mis paneles</h3>
    <div class="boards-collection">
      <span v-if="fetchingData">Cargando...</span>
    	<input type="text" placeholder="Añade un nuevo panel"
    		v-model="boardName"
    		@keyup.enter="add()">
    	<board-card 
    		v-for="(board, index) in boards" :key="index" :name="board.name" :id="board.id">
    	</board-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import BoardCard from '@/components/BoardCard'

export default {
  name: 'HomeView',
  components: {
    BoardCard
  },
  data() {
  	return {
  		boardName: ''
  	}
  },
  computed: {
    ...mapState([
      'boards',
      'fetchingData'
    ])
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
  	add() {
  		this.addBoard({ name: this.boardName }),
      this.boardName = ''
  	}
  },
  created() {
    this.fetchBoards({ user: 1 })
  }
}
</script>

<style scoped>
	h3{
		margin: 1.5rem;
		text-align: left;
	}

	.boards-collection {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding-top: 1rem;
	}

	input{
		background-color: #546e7a;
		border: 2px solid #546e7a;
		border-radius: 3px;
		font-size: 1.1rem;
		padding: 0.5rem;
		transition: all 600ms ease;
	}

	input:focus, input:active {
		background-color: #fff;
		color: #546e7a;
	}

	input::placeholder {
		color: white;
	}
</style>
