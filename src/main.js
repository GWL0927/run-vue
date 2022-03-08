import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/field/style';
import 'vant/lib/button/style';
import 'vant/lib/cell-group/style';
import { Field, Button, CellGroup  } from 'vant'
Vue.use(Field)
Vue.use(Button);
Vue.use(CellGroup);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
