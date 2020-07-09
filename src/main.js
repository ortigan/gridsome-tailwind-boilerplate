import '~/assets/css/tailwind.css'
import VueFormulate from '@braid/vue-formulate'
import '~/assets/css/snow.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';
import DefaultLayout from '~/layouts/Default.vue'
import 'boxicons'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.script.push({
    src: 'https://instant.page/5.1.0',
    type: 'module',
    integrity: 'sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw',
    body: true
  })
  head.script.push({
        src: 'https://kit.fontawesome.com/35b75f7f2e.js',
        body: true
  })
  Vue.use(Vuesax, {})
  Vue.use(VueFormulate)
  Vue.component('Layout', DefaultLayout)
}
