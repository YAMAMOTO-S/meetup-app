import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '111',
        title: 'Meetup in New York',
        date: '2017-07-15',
        description: 'This is a first Event at New York city!!'
      },
      {
        imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '222',
        title: 'Meetup in New Paris',
        date: '2017-07-20',
        description: 'This is secound one !!'
      }
    ],
    user: {
      id: '12346',
      registeredMeetups: []
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: '11111'
      }
      commit('createMeetup', meetup)
    }
  },
  modules: {
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
    }
  }
})
