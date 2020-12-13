import Vue from 'vue'
import App from './Homepage.vue'
import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuikit)
Vue.use(VuikitIcons)
Vue.use(Vuesax)
Vue.config.productionTip = false
Vue.component('v-style', {
  render: function(createElement) {
    return createElement('style', this.$slots.default)
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
