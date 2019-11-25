import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      // {
      //   imageUrl: '',
      //   id: '',
      //   title: '',
      //   date: new Date(),
      //   description: ''
      // },
      // {
      //   imageUrl: '',
      //   id: '',
      //   title: '',
      //   date: new Date(),
      //   description: ''
      // }
    ],
    user: null
  },
  mutations: {

    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload
    },

    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString()
      }

//  firebaseに書き込む     
      firebase.database().ref('meetups').push(meetup)
        .then((data) => {
          const key = data.key
// mutetionに送っている
          commit('createMeetup', {
            ...meetup,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserUp({ commit }, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
                const newUser = {
                  id: user.uid,
                  registeredMeetups: []
                }
                commit('setUser', newUser)
          }
      )
        .catch(
          error => {
            console.log(error)
          }
      )
    },
    loadMeetups({ commit }) {
// firebaseからデータを持ってきている
      firebase.database().ref('meetups').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
// keyを使って中身を見ている             
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date
            })
          }
// ここでsetLoadedMeetupsに渡している
          commit('setLoadedMeetups', meetups)
        })
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },
    autoSingIn({commit}, payload) {
      commit('setUser', {id: payload.uid, registerdMeetups: []})
    }
  },
  
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.data > meetupB.data
      })
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    user(state) {
      return state.user
    }
  }
})
