import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vuetify from './plugins/vuetify';
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import EditMeetup from './components/Meetup/EditMeetup'


Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('edit-meetup', EditMeetup)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

    created() {
      firebase.initializeApp({
        // apiKey: 'AIzaSyD7d9R7giakKKiciHbywU7U093cxQv2SRM',
        // authDomain: 'any-meetup.firebaseapp.com',
        // databaseURL: 'https://any-meetup.firebaseio.com',
        // projectId: 'any-meetup',
        // storageBucket: 'any-meetup.appspot.com',
            apiKey: "AIzaSyAXHaTsoLNxdLoo03oldmDn2Yx3oz_szTc",
              authDomain: "your-meetup.firebaseapp.com",
              databaseURL: "https://your-meetup.firebaseio.com",
              projectId: "your-meetup",
              storageBucket: "your-meetup.appspot.com",
              messagingSenderId: "85200115585",
              appId: "1:85200115585:web:2f8b6fa9e762a1a78a7a80",
              measurementId: "G-3712MW2TB7"
      })
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$store.dispatch('autoSingIn', user)
        }
      })

      this.$store.dispatch('loadMeetups')
    }
}).$mount('#app')
