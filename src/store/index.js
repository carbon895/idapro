import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    valueNameGoods: '',
    valueDescGoods: '',
    valueLinkImage: '',
    valueCostGoods: '',
    goods: []
  },
  getters: {
    ValueNameGoods: state => {
      return state.valueNameGoods;
    },
    ValueDescGoods: state => {
      return state.valueDescGoods;
    },
    ValueLinkImage: state => {
      return state.valueLinkImage;
    },
    ValueCostGoods: state => {
      return state.valueCostGoods;
    },
  },
  mutations: {
    SET_ValueNameGoods: (state, payload) => {
      state.valueNameGoods = payload;
    },
    SET_ValueDescGoods: (state, payload) => {
      state.valueDescGoods = payload;
    },
    SET_ValueLinkImage: (state, payload) => {
      state.valueLinkImage = payload;
    },
    SET_ValueCostGoods: (state, payload) => {
      state.valueCostGoods = payload;
    },
  },
  actions: {
    
  },
  modules: {

  }
})
