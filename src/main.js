import { createApp } from 'vue';
import './assets/index.css';
import App from './App.vue';
import router from './router';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faUserSecret,
  faUserCircle,
  faCalendar,
  faComment,
  faBookmark,
  faStar,
  faShareNodes,
  faPrint,
  faCircleCheck,
  faClock,
  faGlobe,
  faUser,
  faBowlFood,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUserSecret,
  faUserCircle,
  faCalendar,
  faComment,
  faBookmark,
  faStar,
  faShareNodes,
  faCircleCheck,
  faPrint,
  faClock,
  faGlobe,
  faUser,
  faBowlFood,
  faBars,
);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

// Inisialisasi AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-in-out',
});

app
  .use(router)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
