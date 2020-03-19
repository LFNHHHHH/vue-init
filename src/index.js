import Vue from 'vue'

import login from './login.vue'

var vm = new Vue({
  el: '#app',
  data: {
    msg: 'hello'
  },
  render: c => c(login)
})