/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  mdiAccountCircle,
  mdiChevronDown,
  mdiChevronLeft,
  mdiChevronRight,
  mdiListBoxOutline,
  mdiMenuDown,
mdiSend
} from '@mdi/js'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    aliases: {
      ...aliases,
      account: mdiAccountCircle,
      arrowDown: mdiChevronDown,
      arrowDownFilled: mdiMenuDown,
      arrowLeft: mdiChevronLeft,
      arrowRight: mdiChevronRight,
      listItem: mdiListBoxOutline,
      sendMessage: mdiSend
    },
    defaultSet: 'mdi',
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          background: '#5b3758',
          primary: '#83b692',
          secondary: '#f9ada0',
        },
      },
    },
  },
})
