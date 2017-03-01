import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
Vue.prototype.$http = axios;

const store = new Vuex.Store({
  state: {
    names: []
  },
  getters: {
      hasFemaleNames: ({names})=>{
          return names.some( n => n.gender === 'female');
      },
      femaleNames: ({names})=>{
          return names.filter( n => n.gender === 'female');
      },
      maleNames:  ({names})=>{
          return names.filter( n => n.gender === 'male');
      },
      hasMaleNames:  ({names})=>{
          return names.some( n => n.gender === 'male');
      }
  },
  mutations: {
    addName({names}, name){      
      names.push(name);
    },
    removeName({names}, name){
      names.splice(names.indexOf(name), 1);
    }
  }
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
