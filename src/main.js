import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// vuetify

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// pinia

import { createPinia } from "pinia";

// emmiter

import mitt from "mitt";
const emitter = mitt();

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .provide("emitter", emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
