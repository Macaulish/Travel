import Vue from 'vue'
import Vuex from 'vuex'
// import store from '@/store'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '北555京'
  },
  // actions: {
  //   changeCity (ctx, city) {
  //     // console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
