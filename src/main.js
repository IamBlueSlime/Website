import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

import langEn from '../translations/en.json';
import langFr from '../translations/fr.json';

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: langEn,
    fr: langFr,
  },
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
