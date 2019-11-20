import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vuetify from './plugins/vuetify';
import DateFilter from './filters/date'
import * as firebase from 'firebase'

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

    created() {
      firebase.initializeApp({
        apiKey: 'AIzaSyD7d9R7giakKKiciHbywU7U093cxQv2SRM',
        authDomain: 'any-meetup.firebaseapp.com',
        databaseURL: 'https://any-meetup.firebaseio.com',
        projectId: 'any-meetup',
        storageBucket: 'any-meetup.appspot.com',
      })
    }
}).$mount('#app')
