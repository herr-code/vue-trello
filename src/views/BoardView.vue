<template>
  <section>
    <!-- Podemos hacer uso de la propiedad debido a props: true en router -->
    <!-- <h3><span>Mis Paneles</span> > {{ name }}</h3> -->
    <h3><span>Mis Listas</span></h3>
    <input 
      type="text" placeholder="Añade una lista"
      v-model="listName"
      @keyup.enter="add()">

      <template v-if="fetchingData">
        <span>Loading...</span>
      </template>
      <div class="container">
        <column
          v-for="(list, index) in boardList" :key="index"
          :listId="list.id"
          :name="list.name">
        </column>
      </div>
  </section>
</template>

<script>
// @ is an alias to /src
import Column from '@/components/Column'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'board-view',
  components: {
    Column
  },
  props: {
    name: String,
    id: String
  },
  data() {
    return {
      listName: ''
    }
  },
  computed: {
    ...mapState([
      'fetchingData'
    ]),
    ...mapGetters([
      'getListsByBoard'
    ]),
    boardList() {
      return this.getListsByBoard(this.id)
    }
  },
  methods: {
    ...mapActions([
      'fetchLists',
      'addColumn'
    ]),
    add() {
      this.addColumn({board: this.id, name: this.listName}),
      this.listName = ''
    }
  },
  created() {
    this.fetchLists({ board: this.id })
  }
}
</script>

<style scoped>
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
