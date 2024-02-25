<template>
  <div class="nav-bar">
    <v-app-bar
      ><v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon
    ></v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["emitter"],
  methods: {
    openDrawer() {
      this.emitter.emit("openDrawer");
    },
  },
};
</script>
