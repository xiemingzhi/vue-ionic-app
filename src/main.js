import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import IonicVue from '@ionic/vue';
import Ionic from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';


Vue.config.productionTip = false;

//Vue.use(IonicVue);
Vue.use(Ionic);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
