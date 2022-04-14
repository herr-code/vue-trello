import { createStore } from 'vuex'
import { createLogger } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production';

//sii la variable es la misma que la propiedad podemos dejarla asi (state)
export default createStore({
  strict: debug,
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
  plugins: debug ? [createLogger()] : []
})
