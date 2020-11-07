import Vue from 'vue'
import App from './App'
import router from './router'
import * as resources from './resources'
import resource from './plugins/resource'
import deviceQueries from './plugins/device-queries'
import Pace from 'pace-progress'
import animated from 'animate.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(
  faHeart
)

Vue.use(resource, {
  resources,
  endpoint: '/static/api'
})

Vue.use(animated)

Vue.use(deviceQueries, {
  phone: 'max-width: 567px',
  tablet: 'min-width: 568px',
  mobile: 'max-width: 1024px',
  laptop: 'min-width: 1025px',
  desktop: 'min-width: 1280px',
  monitor: 'min-width: 1448px'
})

new Vue({
  router,
  render: h => h(App),
  mounted() {
    Pace.start()
    Pace.on('hide', () => {
      document.dispatchEvent(new Event('app.rendered'));
    })
    document.title = '翡翠丝带健康知识科普'
  }
}).$mount('#app')

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
