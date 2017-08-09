import Vue from 'vue'
import App from './app'

import $ from 'jquery'
import '../lib/js/rem.js'

import Vuex from 'vuex'
Vue.use(Vuex)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import storeConfig from '../lib/js/store.js'
const store = new Vuex.Store(storeConfig)





new Vue({
  el: '#app',
  render: h => h(App),
  store
})
