// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueTailwind from 'vue-tailwind'
import Vue2Filters from 'vue2-filters'
import VueAnime from 'vue-animejs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css"

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component("v-select", vSelect)
  Vue.use(
    VueTailwind,
    Vue2Filters,
    axios,
    VueAxios,
    VueAnime,
    require('vue-moment')
  )
}
