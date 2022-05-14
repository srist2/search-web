import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import manage from './modules/manage'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
// import settings from './modules/settings'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // app,
    // manage,
    tagsView,
    // permission,
    // settings
  },
  getters
})

export default store
