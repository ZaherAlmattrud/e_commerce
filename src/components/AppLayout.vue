<template>
  <div class="layout">
    <v-layout>
      <app-drawer />
      <v-main><slot></slot></v-main>
      <app-nav />
      <app-footer />
    </v-layout>
  </div>
</template>
<script>
import AppNav from "./AppNav.vue";
import AppDrawer from "./AppDrawer.vue";
import AppFooter from "./AppFooter.vue";

export default {
  data: () => ({
    drawer: false,
  }),

  components: {
    AppNav,
    AppDrawer,
    AppFooter,
  },
};
</script>
