<template>
  <div class="nav-bar">
    <v-app-bar color="blue">
      <v-container fluid
        ><v-row>
          <v-col cols="3"
            ><img src="@/assets/images/logo.png" alt=""
          /></v-col> </v-row
      ></v-container>
      <v-app-bar-nav-icon @click="openDrawer"></v-app-bar-nav-icon
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
