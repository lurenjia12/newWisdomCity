import Vue from 'vue'
import Vuex from 'vuex'
// import * as MAIN_CONSTANTS from '../types/main.js'
// import SUCCESS from '../../constants/response-code.js'
// import * as API_CONSTANTS from '../../configs/api.js'

// import { $http } from '../../configs/axios.js'
// import { Message } from 'element-ui'

Vue.use(Vuex)

const state = {
  aa: 5,
  bb: 6
}

const actions = {
  // [MAIN_CONSTANTS.MAIN_RULE_SET_OUP_TYPE](context) {
  // }
  aaaaa(context) {
    context.state.aa = 555
  }
}

const mutations = {
  // [MAIN_CONSTANTS.MAIN_SET_BASE_MENU_DATA](state, data) {
  //   state.baseMenuData = data
  // }
  bbbbb(state,data) {
    state.bb = data
  }
}

const getters = {
}
export default {
  state,
  actions,
  getters,
  mutations
}
