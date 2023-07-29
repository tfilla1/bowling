// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  getters: {
    getUser: (state) => state.user
  },
  state: () => ({
    //
    user: {
      name: 'test user',
      email: 'test@user.com',

    }
  }),
})
